import { NextRequest, NextResponse } from 'next/server';
import { paymentConfig } from '@/data/orderData';

const paymentDatabase = new Map<string, any>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, amount, transactionId, userId, phone } = body;

    if (!orderId || !amount || !transactionId || !userId) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const paymentRecord = {
      transactionId,
      orderId,
      userId,
      phone,
      amount,
      status: 'pending',
      merchantId: paymentConfig.merchantId,
      keyIndex: paymentConfig.keyIndex,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    paymentDatabase.set(transactionId, paymentRecord);

    
    const mockPaymentUrl = `/api/order/payment/simulate?transactionId=${transactionId}`;

    return NextResponse.json({
      success: true,
      message: 'Payment initiated',
      transactionId,
      paymentUrl: mockPaymentUrl,
    });
  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { success: false, message: 'Payment initiation failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const transactionId = searchParams.get('transactionId');

    if (!transactionId) {
      return NextResponse.json(
        { success: false, message: 'Transaction ID required' },
        { status: 400 }
      );
    }

    const payment = paymentDatabase.get(transactionId);

    if (!payment) {
      return NextResponse.json(
        { success: false, message: 'Payment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error('Payment status error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get payment status' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactionId, status, phonepeResponse } = body;

    if (!transactionId || !status) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const payment = paymentDatabase.get(transactionId);

    if (!payment) {
      return NextResponse.json(
        { success: false, message: 'Payment not found' },
        { status: 404 }
      );
    }

    payment.status = status;
    payment.updatedAt = new Date().toISOString();
    payment.phonepeResponse = phonepeResponse;

    paymentDatabase.set(transactionId, payment);

    return NextResponse.json({
      success: true,
      message: 'Payment status updated',
      payment,
    });
  } catch (error) {
    console.error('Payment update error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update payment status' },
      { status: 500 }
    );
  }
}
