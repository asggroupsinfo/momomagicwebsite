import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/auth';
import fs from 'fs/promises';
import path from 'path';

const CMS_DATA_DIR = path.join(process.cwd(), 'data', 'cms');
const COMBOS_DATA_FILE = path.join(CMS_DATA_DIR, 'combos.json');

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
      const data = await fs.readFile(COMBOS_DATA_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      const defaultData = {
        combos: []
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
    const { combo } = body;

    let combosData: { combos: any[] } = { combos: [] };
    try {
      const data = await fs.readFile(COMBOS_DATA_FILE, 'utf-8');
      combosData = JSON.parse(data);
    } catch (error) {
    }

    const existingIndex = combosData.combos.findIndex((c: any) => c.id === combo.id);
    if (existingIndex >= 0) {
      combosData.combos[existingIndex] = combo;
    } else {
      combosData.combos.push(combo);
    }

    await fs.writeFile(COMBOS_DATA_FILE, JSON.stringify(combosData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Combo deal saved successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error saving combo deal:', error);
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
        { error: 'Combo ID is required' },
        { status: 400 }
      );
    }

    let combosData: { combos: any[] } = { combos: [] };
    try {
      const data = await fs.readFile(COMBOS_DATA_FILE, 'utf-8');
      combosData = JSON.parse(data);
    } catch (error) {
      return NextResponse.json(
        { error: 'Combos data not found' },
        { status: 404 }
      );
    }

    combosData.combos = combosData.combos.filter((c: any) => c.id !== id);

    await fs.writeFile(COMBOS_DATA_FILE, JSON.stringify(combosData, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Combo deal deleted successfully'
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error deleting combo deal:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
