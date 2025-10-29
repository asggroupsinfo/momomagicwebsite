import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page } = await params;
    
    const existingDraft = await queryOne(
      'SELECT id FROM cms_content WHERE page_name = ?',
      [page]
    );
    
    if (existingDraft) {
      return NextResponse.json({
        success: true,
        message: 'Draft content already exists',
        alreadyExists: true
      });
    }
    
    const liveUrl = `https://momosmagic.in/api/cms/${page}`;
    const response = await fetch(liveUrl);
    
    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: 'Failed to fetch live content'
      }, { status: 404 });
    }
    
    const liveData = await response.json();
    
    if (!liveData.data) {
      return NextResponse.json({
        success: false,
        error: 'No content found on live website'
      }, { status: 404 });
    }
    
    await query(
      'INSERT INTO cms_content (page_name, content_data) VALUES (?, ?)',
      [page, JSON.stringify(liveData.data)]
    );
    
    return NextResponse.json({
      success: true,
      message: 'Draft initialized with live content',
      data: liveData.data
    });
    
  } catch (error) {
    console.error('Error initializing content:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
