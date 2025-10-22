import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/utils';
import { defaultMenuItems, type MenuItem } from '@/lib/cms/content';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'data', 'menu-items.json');

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
      return NextResponse.json(defaultMenuItems);
    }
  } catch (error) {
    console.error('Error reading menu items:', error);
    return NextResponse.json(
      { error: 'Failed to read menu items' },
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

    const updatedItems: MenuItem[] = await request.json();

    if (!Array.isArray(updatedItems)) {
      return NextResponse.json(
        { error: 'Menu items must be an array' },
        { status: 400 }
      );
    }

    await ensureDataDir();
    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(updatedItems, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Menu items updated successfully',
      items: updatedItems
    });
  } catch (error) {
    console.error('Error updating menu items:', error);
    return NextResponse.json(
      { error: 'Failed to update menu items' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get('id');

    if (!itemId) {
      return NextResponse.json(
        { error: 'Item ID is required' },
        { status: 400 }
      );
    }

    await ensureDataDir();
    let items: MenuItem[] = defaultMenuItems;
    
    try {
      const content = await fs.readFile(CONTENT_FILE, 'utf-8');
      items = JSON.parse(content);
    } catch {
    }

    const updatedItems = items.filter(item => item.id !== itemId);

    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(updatedItems, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Menu item deleted successfully',
      items: updatedItems
    });
  } catch (error) {
    console.error('Error deleting menu item:', error);
    return NextResponse.json(
      { error: 'Failed to delete menu item' },
      { status: 500 }
    );
  }
}
