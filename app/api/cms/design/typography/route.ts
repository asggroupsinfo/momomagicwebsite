import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const settings = await queryOne(
      'SELECT * FROM design_settings WHERE setting_type = ? ORDER BY updated_at DESC LIMIT 1',
      ['typography']
    );

    if (!settings) {
      return NextResponse.json({
        settings: {
          headingFont: 'Poppins, sans-serif',
          bodyFont: 'Inter, sans-serif',
          h1Size: 48,
          h2Size: 32,
          h3Size: 24,
          bodySize: 16,
          headingWeight: 700,
          bodyWeight: 400,
          lineHeight: 1.5,
        },
      });
    }

    return NextResponse.json(JSON.parse(settings.setting_value));
  } catch (error) {
    console.error('Error fetching typography settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch typography settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { settings } = body;

    if (!settings) {
      return NextResponse.json(
        { error: 'Settings are required' },
        { status: 400 }
      );
    }

    const settingValue = JSON.stringify({ settings });
    const settingId = `TYPOGRAPHY-${Date.now()}`;

    await query(
      `INSERT INTO design_settings (id, setting_type, setting_value, updated_at)
       VALUES (?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()`,
      [settingId, 'typography', settingValue, settingValue]
    );

    return NextResponse.json({
      success: true,
      message: 'Typography settings saved successfully',
    });
  } catch (error) {
    console.error('Error saving typography settings:', error);
    return NextResponse.json(
      { error: 'Failed to save typography settings' },
      { status: 500 }
    );
  }
}
