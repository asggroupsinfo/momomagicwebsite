import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const HERO_DATA_FILE = path.join(CMS_DATA_DIR, 'hero.json');

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
      const data = await fs.readFile(HERO_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      const defaultData = {
        headline: 'From Humble Stall to Culinary Legend',
        subheadline: 'Experience the Magic That Transformed Sherghati\'s Street Food Scene',
        primaryCTA: 'Order Now',
        secondaryCTA: 'Our Story',
        badges: [
          'Awarded "Best Quality Food in City"',
          'FSSAI Certified: 20424201001152',
          '100% Pure Vegetarian · Since 2023',
          '⭐ 4.9/5 (2000+ Happy Customers)'
        ],
        backgroundVideo: '/videos/hero-bg.mp4'
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

    await fs.writeFile(HERO_DATA_FILE, JSON.stringify(body, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Hero content updated successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error saving hero content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
