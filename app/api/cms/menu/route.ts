import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const MENU_DATA_FILE = path.join(CMS_DATA_DIR, 'menu.json');

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
      const data = await fs.readFile(MENU_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      const defaultData = {
        items: []
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
    const { item } = body;

    let menuData: { items: any[] } = { items: [] };
    try {
      const data = await fs.readFile(MENU_DATA_FILE, 'utf-8');
      menuData = JSON.parse(data);
    } catch (error) {
    }

    const existingIndex = menuData.items.findIndex((i: any) => i.id === item.id);
    if (existingIndex >= 0) {
      menuData.items[existingIndex] = item;
    } else {
      menuData.items.push(item);
    }

    await fs.writeFile(MENU_DATA_FILE, JSON.stringify(menuData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Menu item saved successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error saving menu item:', error);
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
        { error: 'Item ID is required' },
        { status: 400 }
      );
    }

    let menuData: { items: any[] } = { items: [] };
    try {
      const data = await fs.readFile(MENU_DATA_FILE, 'utf-8');
      menuData = JSON.parse(data);
    } catch (error) {
      return NextResponse.json(
        { error: 'Menu data not found' },
        { status: 404 }
      );
    }

    menuData.items = menuData.items.filter((i: any) => i.id !== id);

    await fs.writeFile(MENU_DATA_FILE, JSON.stringify(menuData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Menu item deleted successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error deleting menu item:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
