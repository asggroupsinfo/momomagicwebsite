import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/utils';
import fs from 'fs/promises';
import path from 'path';

const GALLERY_FILE = path.join(process.cwd(), 'data', 'gallery.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function getGalleryData() {
  try {
    const data = await fs.readFile(GALLERY_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    const defaultData = {
      images: [
        {
          id: 1,
          url: '/images/gallery/kurkure-momos.jpg',
          alt: 'Kurkure Momos - Our Signature Dish',
          category: 'food'
        },
        {
          id: 2,
          url: '/images/gallery/pizza-momos.jpg',
          alt: 'Pizza Momos - Fusion Innovation',
          category: 'food'
        },
        {
          id: 3,
          url: '/images/gallery/stall-front.jpg',
          alt: 'Momos Magic Stall - Naya Bazar',
          category: 'stall'
        },
        {
          id: 4,
          url: '/images/gallery/steamed-momos.jpg',
          alt: 'Fresh Steamed Momos',
          category: 'food'
        },
        {
          id: 5,
          url: '/images/gallery/award-ceremony.jpg',
          alt: 'Best Quality Food Award',
          category: 'awards'
        },
        {
          id: 6,
          url: '/images/gallery/kitchen.jpg',
          alt: 'Our Hygienic Kitchen',
          category: 'stall'
        }
      ]
    };
    await ensureDataDirectory();
    await fs.writeFile(GALLERY_FILE, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = await getGalleryData();
    return NextResponse.json({ success: true, data: data.images });
  } catch (error) {
    console.error('Gallery GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await verifyToken(token);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { images } = body;

    await ensureDataDirectory();
    await fs.writeFile(GALLERY_FILE, JSON.stringify({ images }, null, 2));

    return NextResponse.json({ success: true, message: 'Gallery updated successfully' });
  } catch (error) {
    console.error('Gallery POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update gallery' },
      { status: 500 }
    );
  }
}
