import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

/**
 * Automated Database Migration Endpoint
 * Creates the 3 required tables for the Phase 7 publish system
 * 
 * Usage: Visit https://admin.momosmagic.in/api/migrate-database
 * 
 * Tables Created:
 * 1. published_content - Stores live published content
 * 2. content_backups - Stores backup copies before publishing
 * 3. publish_history - Tracks all publish/undo actions
 */
export async function GET(request: NextRequest) {
  try {
    const results: string[] = [];
    
    try {
      await query(`
        CREATE TABLE IF NOT EXISTS published_content (
          id INT AUTO_INCREMENT PRIMARY KEY,
          page_name VARCHAR(100) NOT NULL UNIQUE,
          content_data JSON NOT NULL,
          published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          published_by VARCHAR(100) DEFAULT 'admin',
          INDEX idx_page_name (page_name)
        )
      `);
      results.push('✅ published_content table created');
    } catch (error: any) {
      results.push(`❌ published_content table error: ${error.message}`);
    }

    try {
      await query(`
        CREATE TABLE IF NOT EXISTS content_backups (
          id INT AUTO_INCREMENT PRIMARY KEY,
          page_name VARCHAR(100) NOT NULL,
          content_data JSON NOT NULL,
          backup_type VARCHAR(50) DEFAULT 'auto',
          backup_name VARCHAR(200),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          created_by VARCHAR(100) DEFAULT 'admin',
          INDEX idx_backups_page_created (page_name, created_at)
        )
      `);
      results.push('✅ content_backups table created');
    } catch (error: any) {
      results.push(`❌ content_backups table error: ${error.message}`);
    }

    try {
      await query(`
        CREATE TABLE IF NOT EXISTS publish_history (
          id INT AUTO_INCREMENT PRIMARY KEY,
          page_name VARCHAR(100) NOT NULL,
          action VARCHAR(50) NOT NULL,
          status VARCHAR(50) DEFAULT 'success',
          message TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          created_by VARCHAR(100) DEFAULT 'admin',
          INDEX idx_history_page_created (page_name, created_at)
        )
      `);
      results.push('✅ publish_history table created');
    } catch (error: any) {
      results.push(`❌ publish_history table error: ${error.message}`);
    }

    try {
      const tables = await query(`
        SELECT TABLE_NAME 
        FROM information_schema.TABLES 
        WHERE TABLE_SCHEMA = DATABASE() 
        AND TABLE_NAME IN ('published_content', 'content_backups', 'publish_history')
      `);
      
      const tableNames = (tables as any[]).map((t: any) => t.TABLE_NAME);
      results.push(`\n📊 Tables verified: ${tableNames.join(', ')}`);
      
      const allTablesExist = 
        tableNames.includes('published_content') &&
        tableNames.includes('content_backups') &&
        tableNames.includes('publish_history');
      
      if (allTablesExist) {
        results.push('\n🎉 Migration completed successfully!');
        results.push('✅ All 3 tables are ready for the publish system');
      } else {
        results.push('\n⚠️ Some tables may not have been created');
      }
    } catch (error: any) {
      results.push(`❌ Verification error: ${error.message}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Database migration completed',
      results: results,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({
      success: false,
      error: 'Migration failed',
      message: error.message,
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
