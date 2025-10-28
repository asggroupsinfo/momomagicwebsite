import { NextResponse } from 'next/server';
import { query, testConnection } from '@/lib/db';

export async function GET() {
  try {
    const dbUrl = process.env.DATABASE_URL;
    const hasDbUrl = !!dbUrl;
    const dbUrlPreview = dbUrl ? `${dbUrl.substring(0, 20)}...` : 'NOT SET';
    
    const connectionTest = await testConnection();
    
    if (!connectionTest) {
      return NextResponse.json({
        error: 'Database connection failed',
        hasDbUrl,
        dbUrlPreview,
      }, { status: 500 });
    }
    
    const result = await query('SELECT COUNT(*) as count FROM page_configurations');
    
    return NextResponse.json({
      success: true,
      connectionTest,
      hasDbUrl,
      dbUrlPreview,
      pageCount: result[0]?.count || 0,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: 'Test failed',
      message: error.message,
      hasDbUrl: !!process.env.DATABASE_URL,
    }, { status: 500 });
  }
}
