import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const settings = await query('SELECT * FROM payment_settings');
    
    const formattedSettings = settings.map((setting: any) => ({
      ...setting,
      config: typeof setting.config === 'string' ? JSON.parse(setting.config) : setting.config,
    }));
    
    return NextResponse.json({ settings: formattedSettings });
  } catch (error) {
    console.error('Error fetching payment settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { provider, isEnabled, config } = body;
    
    if (!provider) {
      return NextResponse.json(
        { error: 'Provider is required' },
        { status: 400 }
      );
    }
    
    const existing = await query(
      'SELECT id FROM payment_settings WHERE provider = ?',
      [provider]
    );
    
    if (existing.length > 0) {
      await query(
        'UPDATE payment_settings SET is_enabled = ?, config = ? WHERE provider = ?',
        [isEnabled, JSON.stringify(config), provider]
      );
    } else {
      await query(
        'INSERT INTO payment_settings (provider, is_enabled, config) VALUES (?, ?, ?)',
        [provider, isEnabled, JSON.stringify(config)]
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Payment settings saved successfully' 
    });
  } catch (error) {
    console.error('Error saving payment settings:', error);
    return NextResponse.json(
      { error: 'Failed to save payment settings' },
      { status: 500 }
    );
  }
}
