import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'data', 'cms', 'content');

async function ensureContentDir() {
  try {
    await fs.access(CONTENT_DIR);
  } catch {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { page: string } }
) {
  try {
    await ensureContentDir();
    const filePath = path.join(CONTENT_DIR, `${params.page}.json`);
    
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return NextResponse.json(JSON.parse(content));
    } catch {
      return NextResponse.json({});
    }
  } catch (error) {
    console.error('Error reading content:', error);
    return NextResponse.json(
      { error: 'Failed to read content' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { page: string } }
) {
  try {
    await ensureContentDir();
    const body = await request.json();
    const filePath = path.join(CONTENT_DIR, `${params.page}.json`);
    
    const contentWithMeta = {
      ...body,
      lastUpdated: new Date().toISOString(),
      page: params.page,
    };
    
    await fs.writeFile(filePath, JSON.stringify(contentWithMeta, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Content saved successfully',
      data: contentWithMeta 
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}
