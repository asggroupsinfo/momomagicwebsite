import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const CATERING_DATA_FILE = path.join(CMS_DATA_DIR, 'catering.json');

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
      const data = await fs.readFile(CATERING_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      const defaultData = {
        packages: [],
        bookings: [],
        testimonials: [],
        settings: {
          deliveryRadius: 10,
          advanceBookingDays: 7,
          maxGuestsPerPackage: 1000,
          contactPhone: '+91 9955955191',
          contactEmail: 'catering@momomagic.com',
        },
      };
      return NextResponse.json(defaultData);
    }
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    const body = await request.json();
    const { type, data } = body;

    let cateringData: any = { packages: [], bookings: [], testimonials: [], settings: {} };
    try {
      const existingData = await fs.readFile(CATERING_DATA_FILE, 'utf-8');
      cateringData = JSON.parse(existingData);
    } catch (error) {
    }

    switch (type) {
      case 'package':
        const existingPackageIndex = cateringData.packages.findIndex((p: any) => p.id === data.id);
        if (existingPackageIndex >= 0) {
          cateringData.packages[existingPackageIndex] = data;
        } else {
          cateringData.packages.push(data);
        }
        break;

      case 'booking':
        const existingBookingIndex = cateringData.bookings.findIndex((b: any) => b.id === data.id);
        if (existingBookingIndex >= 0) {
          cateringData.bookings[existingBookingIndex] = data;
        } else {
          cateringData.bookings.push(data);
        }
        break;

      case 'testimonial':
        const existingTestimonialIndex = cateringData.testimonials.findIndex((t: any) => t.id === data.id);
        if (existingTestimonialIndex >= 0) {
          cateringData.testimonials[existingTestimonialIndex] = data;
        } else {
          cateringData.testimonials.push(data);
        }
        break;

      case 'settings':
        cateringData.settings = { ...cateringData.settings, ...data };
        break;

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    await fs.writeFile(CATERING_DATA_FILE, JSON.stringify(cateringData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: `Catering ${type} saved successfully`,
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.error('Error saving catering data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json({ error: 'Type and ID are required' }, { status: 400 });
    }

    let cateringData: any = { packages: [], bookings: [], testimonials: [], settings: {} };
    try {
      const existingData = await fs.readFile(CATERING_DATA_FILE, 'utf-8');
      cateringData = JSON.parse(existingData);
    } catch (error) {
      return NextResponse.json({ error: 'Catering data not found' }, { status: 404 });
    }

    switch (type) {
      case 'package':
        cateringData.packages = cateringData.packages.filter((p: any) => p.id !== id);
        break;

      case 'booking':
        cateringData.bookings = cateringData.bookings.filter((b: any) => b.id !== id);
        break;

      case 'testimonial':
        cateringData.testimonials = cateringData.testimonials.filter((t: any) => t.id !== id);
        break;

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    await fs.writeFile(CATERING_DATA_FILE, JSON.stringify(cateringData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: `Catering ${type} deleted successfully`,
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.error('Error deleting catering data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
