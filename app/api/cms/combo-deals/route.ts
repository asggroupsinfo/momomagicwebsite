import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/utils';
import fs from 'fs/promises';
import path from 'path';

const COMBO_DEALS_FILE = path.join(process.cwd(), 'data', 'combo-deals.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function getComboDealsData() {
  try {
    const data = await fs.readFile(COMBO_DEALS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    const defaultData = {
      deals: [
        {
          id: 1,
          name: 'Family Feast',
          description: 'Perfect for family gatherings with variety',
          items: ['2 Full Plates Kurkure Momos', '1 Full Plate Pizza Momos', '2 Drinks'],
          originalPrice: 400,
          discountedPrice: 340,
          discountPercent: 15,
          expiryDate: '2025-12-31',
          isActive: true
        },
        {
          id: 2,
          name: 'Student Special',
          description: 'Budget-friendly combo for students',
          items: ['1 Half Plate Momos', '1 Drink'],
          originalPrice: 50,
          discountedPrice: 45,
          discountPercent: 10,
          expiryDate: '2025-12-31',
          isActive: true
        },
        {
          id: 3,
          name: 'Weekend Treat',
          description: 'Special weekend offer with premium items',
          items: ['3 Full Plates Variety Momos', '2 Soups', '2 Drinks'],
          originalPrice: 600,
          discountedPrice: 480,
          discountPercent: 20,
          expiryDate: '2025-12-31',
          isActive: true
        }
      ]
    };
    await ensureDataDirectory();
    await fs.writeFile(COMBO_DEALS_FILE, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = await getComboDealsData();
    return NextResponse.json({ success: true, data: data.deals });
  } catch (error) {
    console.error('Combo deals GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch combo deals' },
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
    const { deals } = body;

    await ensureDataDirectory();
    await fs.writeFile(COMBO_DEALS_FILE, JSON.stringify({ deals }, null, 2));

    return NextResponse.json({ success: true, message: 'Combo deals updated successfully' });
  } catch (error) {
    console.error('Combo deals POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update combo deals' },
      { status: 500 }
    );
  }
}
