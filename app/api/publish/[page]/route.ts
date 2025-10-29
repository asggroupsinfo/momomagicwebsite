import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import { query, queryOne } from '@/lib/db';

function getDatabaseType(): 'mysql' | 'postgres' {
  const databaseUrl = process.env.DATABASE_URL || '';
  return databaseUrl.includes('postgres') ? 'postgres' : 'mysql';
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    await requireAuth();

    const { page } = await params;
    const dbType = getDatabaseType();
    
    const draftContent = await queryOne(
      'SELECT content_data FROM cms_content WHERE page_name = ?',
      [page]
    );

    if (!draftContent) {
      return NextResponse.json(
        { error: 'No draft content found for this page' },
        { status: 404 }
      );
    }

    const existingPublished = await queryOne(
      'SELECT content_data FROM published_content WHERE page_name = ?',
      [page]
    );

    if (existingPublished) {
      await query(
        'INSERT INTO content_backups (page_name, content_data, backup_type) VALUES (?, ?, ?)',
        [page, JSON.stringify(existingPublished.content_data), 'auto']
      );
    }

    const existingRecord = await queryOne(
      'SELECT id FROM published_content WHERE page_name = ?',
      [page]
    );

    if (existingRecord) {
      await query(
        'UPDATE published_content SET content_data = ?, published_at = CURRENT_TIMESTAMP WHERE page_name = ?',
        [JSON.stringify(draftContent.content_data), page]
      );
    } else {
      await query(
        'INSERT INTO published_content (page_name, content_data) VALUES (?, ?)',
        [page, JSON.stringify(draftContent.content_data)]
      );
    }

    await query(
      'INSERT INTO publish_history (page_name, action, status, message) VALUES (?, ?, ?, ?)',
      [page, 'publish', 'success', `Published ${page} content to live website`]
    );

    return NextResponse.json({
      success: true,
      message: 'Content published successfully',
      publishedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error publishing content:', error);
    
    const { page } = await params;
    await query(
      'INSERT INTO publish_history (page_name, action, status, message) VALUES (?, ?, ?, ?)',
      [page, 'publish', 'error', error instanceof Error ? error.message : 'Unknown error']
    ).catch(() => {});

    return NextResponse.json(
      { error: 'Failed to publish content' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    await requireAuth();

    const { page } = await params;
    
    const draftContent = await queryOne(
      'SELECT content_data, updated_at FROM cms_content WHERE page_name = ?',
      [page]
    );

    const publishedContent = await queryOne(
      'SELECT content_data, published_at FROM published_content WHERE page_name = ?',
      [page]
    );

    const hasUnpublishedChanges = draftContent && publishedContent && 
      JSON.stringify(draftContent.content_data) !== JSON.stringify(publishedContent.content_data);

    return NextResponse.json({
      status: publishedContent ? (hasUnpublishedChanges ? 'unpublished_changes' : 'published') : 'never_published',
      draftUpdatedAt: draftContent?.updated_at,
      publishedAt: publishedContent?.published_at,
      hasUnpublishedChanges
    });

  } catch (error) {
    console.error('Error getting publish status:', error);
    return NextResponse.json(
      { error: 'Failed to get publish status' },
      { status: 500 }
    );
  }
}
