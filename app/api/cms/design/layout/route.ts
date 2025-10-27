import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const settings = await queryOne(
      'SELECT * FROM design_settings WHERE setting_type = ? ORDER BY updated_at DESC LIMIT 1',
      ['layout']
    );

    if (!settings) {
      return NextResponse.json({
        settings: {
          sections: [
            { id: 'hero', title: 'Hero Section', visible: true, order: 1, icon: '🎯' },
            { id: 'story', title: 'Brand Story', visible: true, order: 2, icon: '📖' },
            { id: 'menu', title: 'Featured Menu', visible: true, order: 3, icon: '🥟' },
            { id: 'testimonials', title: 'Customer Reviews', visible: true, order: 4, icon: '⭐' },
            { id: 'location', title: 'Location & Contact', visible: true, order: 5, icon: '📍' },
            { id: 'newsletter', title: 'Newsletter Signup', visible: true, order: 6, icon: '📧' },
          ],
          containerWidth: '1280px',
          sectionSpacing: 80,
          gridColumns: 3,
        },
      });
    }

    return NextResponse.json(JSON.parse(settings.setting_value));
  } catch (error) {
    console.error('Error fetching layout settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch layout settings' },
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
    const settingId = `LAYOUT-${Date.now()}`;

    await query(
      `INSERT INTO design_settings (id, setting_type, setting_value, updated_at)
       VALUES (?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()`,
      [settingId, 'layout', settingValue, settingValue]
    );

    return NextResponse.json({
      success: true,
      message: 'Layout settings saved successfully',
    });
  } catch (error) {
    console.error('Error saving layout settings:', error);
    return NextResponse.json(
      { error: 'Failed to save layout settings' },
      { status: 500 }
    );
  }
}
