import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let sql = `
      SELECT o.*, 
        GROUP_CONCAT(
          JSON_OBJECT(
            'id', oi.id,
            'menuItemId', oi.menu_item_id,
            'menuItemName', oi.menu_item_name,
            'quantity', oi.quantity,
            'price', oi.price,
            'subtotal', oi.subtotal
          )
        ) as items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
    `;
    
    if (status && status !== 'all') {
      sql += ` WHERE o.status = ?`;
    }
    
    sql += ` GROUP BY o.id ORDER BY o.created_at DESC`;
    
    const orders = await query(sql, status && status !== 'all' ? [status] : []);
    
    const formattedOrders = orders.map((order: any) => ({
      ...order,
      items: order.items ? JSON.parse(`[${order.items}]`) : [],
    }));
    
    return NextResponse.json({ orders: formattedOrders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { order } = body;
    
    if (!order) {
      return NextResponse.json(
        { error: 'Order data is required' },
        { status: 400 }
      );
    }
    
    const sql = `
      INSERT INTO orders (id, user_id, status, payment_status, payment_method, total, estimated_time)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    await query(sql, [
      order.id,
      order.userId,
      order.status || 'pending',
      order.paymentStatus || 'pending',
      order.paymentMethod || 'cod',
      order.total,
      order.estimatedTime || 30,
    ]);
    
    if (order.items && order.items.length > 0) {
      const itemsSql = `
        INSERT INTO order_items (order_id, menu_item_id, menu_item_name, quantity, price, subtotal)
        VALUES ?
      `;
      
      const itemsValues = order.items.map((item: any) => [
        order.id,
        item.menuItemId,
        item.menuItemName,
        item.quantity,
        item.price,
        item.subtotal,
      ]);
      
      await query(itemsSql, [itemsValues]);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Order created successfully',
      orderId: order.id 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, status } = body;
    
    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'Order ID and status are required' },
        { status: 400 }
      );
    }
    
    const statusField = `${status}_at`;
    const sql = `
      UPDATE orders 
      SET status = ?, ${statusField} = NOW()
      WHERE id = ?
    `;
    
    await query(sql, [status, orderId]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Order status updated successfully' 
    });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}
