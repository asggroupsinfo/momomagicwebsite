import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/utils';
import { defaultHeroContent, type HeroContent } from '@/lib/cms/content';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'data', 'hero-content.json');

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

export async function GET(request: NextRequest) {
  try {
    await ensureDataDir();
    
    try {
      const content = await fs.readFile(CONTENT_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(content));
    } catch {
      return NextResponse.json(defaultHeroContent);
    }
  } catch (error) {
    console.error('Error reading hero content:', error);
    return NextResponse.json(
      { error: 'Failed to read content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await verifyToken(token);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const updatedContent: HeroContent = await request.json();

    if (!updatedContent.headline || !updatedContent.subheadline) {
      return NextResponse.json(
        { error: 'Headline and subheadline are required' },
        { status: 400 }
      );
    }

    await ensureDataDir();
    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(updatedContent, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Hero content updated successfully',
      content: updatedContent
    });
  } catch (error) {
    console.error('Error updating hero content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}
