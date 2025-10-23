import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const GALLERY_DATA_FILE = path.join(CMS_DATA_DIR, 'gallery.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(CMS_DATA_DIR, { recursive: true });
  } catch (error) {
  }
}

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    try {
      const data = await fs.readFile(GALLERY_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      const defaultData = {
        images: []
      };
      return NextResponse.json(defaultData);
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    const body = await request.json();
    const { image } = body;

    let galleryData: { images: any[] } = { images: [] };
    try {
      const data = await fs.readFile(GALLERY_DATA_FILE, 'utf-8');
      galleryData = JSON.parse(data);
    } catch (error) {
    }

    const existingIndex = galleryData.images.findIndex((i: any) => i.id === image.id);
    if (existingIndex >= 0) {
      galleryData.images[existingIndex] = image;
    } else {
      galleryData.images.push(image);
    }

    await fs.writeFile(GALLERY_DATA_FILE, JSON.stringify(galleryData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Image saved successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error saving image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      );
    }

    let galleryData: { images: any[] } = { images: [] };
    try {
      const data = await fs.readFile(GALLERY_DATA_FILE, 'utf-8');
      galleryData = JSON.parse(data);
    } catch (error) {
      return NextResponse.json(
        { error: 'Gallery data not found' },
        { status: 404 }
      );
    }

    galleryData.images = galleryData.images.filter((i: any) => i.id !== id);

    await fs.writeFile(GALLERY_DATA_FILE, JSON.stringify(galleryData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error deleting image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
