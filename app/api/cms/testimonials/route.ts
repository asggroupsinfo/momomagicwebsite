import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/utils';
import fs from 'fs/promises';
import path from 'path';

const TESTIMONIALS_FILE = path.join(process.cwd(), 'data', 'testimonials.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function getTestimonialsData() {
  try {
    const data = await fs.readFile(TESTIMONIALS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    const defaultData = {
      testimonials: [
        {
          id: 1,
          name: 'Rohan Kumar',
          role: 'Regular Customer',
          content: 'The Kurkure Momos are revolutionary! Nobody in Bihar makes them like Momos Magic. Dhruv bhaiya\'s innovation changed street food forever!',
          rating: 5
        },
        {
          id: 2,
          name: 'Priya Singh',
          role: 'Local Foodie',
          content: 'From watching them start with a small stall to becoming the most premium food spot - what a journey! The Pizza Momos are genius!',
          rating: 5
        },
        {
          id: 3,
          name: 'Amit Sharma',
          role: 'Food Blogger',
          content: 'Awarded "Best Quality Food" for a reason! The hygiene, taste, and innovation combination is unmatched in Sherghati.',
          rating: 5
        }
      ]
    };
    await ensureDataDirectory();
    await fs.writeFile(TESTIMONIALS_FILE, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = await getTestimonialsData();
    return NextResponse.json({ success: true, data: data.testimonials });
  } catch (error) {
    console.error('Testimonials GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch testimonials' },
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
    const { testimonials } = body;

    await ensureDataDirectory();
    await fs.writeFile(TESTIMONIALS_FILE, JSON.stringify({ testimonials }, null, 2));

    return NextResponse.json({ success: true, message: 'Testimonials updated successfully' });
  } catch (error) {
    console.error('Testimonials POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update testimonials' },
      { status: 500 }
    );
  }
}
