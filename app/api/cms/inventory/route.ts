import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lowStock = searchParams.get('lowStock');
    
    let sql = 'SELECT * FROM inventory';
    
    if (lowStock === 'true') {
      sql += ' WHERE stock_level <= low_stock_threshold';
    }
    
    sql += ' ORDER BY stock_level ASC';
    
    const inventory = await query(sql);
    
    return NextResponse.json({ inventory });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inventory' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { item } = body;
    
    if (!item) {
      return NextResponse.json(
        { error: 'Item data is required' },
        { status: 400 }
      );
    }
    
    if (item.id) {
      const sql = `
        UPDATE inventory 
        SET stock_level = ?, low_stock_threshold = ?, unit = ?, last_restocked = NOW()
        WHERE id = ?
      `;
      
      await query(sql, [
        item.stockLevel,
        item.lowStockThreshold,
        item.unit,
        item.id,
      ]);
    } else {
      const itemId = `INV-${Date.now()}`;
      const sql = `
        INSERT INTO inventory (id, menu_item_id, menu_item_name, stock_level, low_stock_threshold, unit, last_restocked)
        VALUES (?, ?, ?, ?, ?, ?, NOW())
      `;
      
      await query(sql, [
        itemId,
        item.menuItemId,
        item.menuItemName,
        item.stockLevel,
        item.lowStockThreshold || 10,
        item.unit || 'pieces',
      ]);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Inventory updated successfully' 
    });
  } catch (error) {
    console.error('Error updating inventory:', error);
    return NextResponse.json(
      { error: 'Failed to update inventory' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, adjustment } = body;
    
    if (!itemId || adjustment === undefined) {
      return NextResponse.json(
        { error: 'Item ID and adjustment are required' },
        { status: 400 }
      );
    }
    
    await query(
      'UPDATE inventory SET stock_level = stock_level + ? WHERE id = ?',
      [adjustment, itemId]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Stock level adjusted successfully' 
    });
  } catch (error) {
    console.error('Error adjusting stock:', error);
    return NextResponse.json(
      { error: 'Failed to adjust stock' },
      { status: 500 }
    );
  }
}
