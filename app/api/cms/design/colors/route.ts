import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const settings = await queryOne(
      'SELECT * FROM design_settings WHERE setting_type = ? ORDER BY updated_at DESC LIMIT 1',
      ['colors']
    );

    if (!settings) {
      return NextResponse.json({
        palette: {
          primary: '#000000',
          secondary: '#ffc241',
          accent: '#ffd700',
          background: '#0a0a0a',
          text: '#ffffff',
        },
        darkMode: false,
      });
    }

    return NextResponse.json(JSON.parse(settings.setting_value));
  } catch (error) {
    console.error('Error fetching color settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch color settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { palette, darkMode } = body;

    if (!palette) {
      return NextResponse.json(
        { error: 'Palette is required' },
        { status: 400 }
      );
    }

    const settingValue = JSON.stringify({ palette, darkMode });
    const settingId = `COLORS-${Date.now()}`;

    await query(
      `INSERT INTO design_settings (id, setting_type, setting_value, updated_at)
       VALUES (?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()`,
      [settingId, 'colors', settingValue, settingValue]
    );

    return NextResponse.json({
      success: true,
      message: 'Color settings saved successfully',
    });
  } catch (error) {
    console.error('Error saving color settings:', error);
    return NextResponse.json(
      { error: 'Failed to save color settings' },
      { status: 500 }
    );
  }
}
