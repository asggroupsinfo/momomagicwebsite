import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (slug) {
      const page = await query(
        'SELECT * FROM legal_pages WHERE slug = ?',
        [slug]
      );
      return NextResponse.json({ page: page[0] || null });
    }
    
    const pages = await query(
      'SELECT * FROM legal_pages ORDER BY updated_at DESC'
    );
    
    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error fetching legal pages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch legal pages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page } = body;
    
    if (!page) {
      return NextResponse.json(
        { error: 'Page data is required' },
        { status: 400 }
      );
    }
    
    if (page.id) {
      const sql = `
        UPDATE legal_pages 
        SET title = ?, summary = ?, content = ?, version = ?, status = ?, language = ?
        WHERE id = ?
      `;
      
      await query(sql, [
        page.title,
        page.summary,
        page.content,
        page.version,
        page.status,
        page.language,
        page.id,
      ]);
    } else {
      const pageId = `LEGAL-${Date.now()}`;
      const sql = `
        INSERT INTO legal_pages (id, slug, title, summary, content, version, status, language)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      await query(sql, [
        pageId,
        page.slug,
        page.title,
        page.summary,
        page.content,
        page.version || '1.0',
        page.status || 'published',
        page.language || 'en',
      ]);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Legal page saved successfully' 
    });
  } catch (error) {
    console.error('Error saving legal page:', error);
    return NextResponse.json(
      { error: 'Failed to save legal page' },
      { status: 500 }
    );
  }
}
