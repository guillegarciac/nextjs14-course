import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ]
  });
}