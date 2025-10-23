import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const CONTACT_DATA_FILE = path.join(CMS_DATA_DIR, 'contact.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(CMS_DATA_DIR, { recursive: true });
  } catch (error) {
  }
}

const defaultContactData = {
  address: {
    line1: 'Naya Bazar, Near Post Office',
    line2: '',
    city: 'Sherghati',
    state: 'Bihar',
    pincode: '824211',
  },
  phone: '+91 9955955191',
  website: 'www.momomegics.com',
  businessHours: {
    weekdays: '10:00 AM - 10:00 PM',
    weekends: '10:00 AM - 10:00 PM',
    note: 'Open Every Day',
  },
  socialMedia: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  mapEmbedUrl: '',
};

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await ensureDataDir();

    try {
      const data = await fs.readFile(CONTACT_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      return NextResponse.json(defaultContactData);
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

    await fs.writeFile(CONTACT_DATA_FILE, JSON.stringify(body, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Contact information saved successfully',
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error saving contact information:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
