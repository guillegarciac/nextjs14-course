import { NextResponse } from 'next/server';

// get message
export async function GET() {
  return NextResponse.json({
    message: 'Hello from the API!',
  });
}

// post data
export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({
    data,
  });
}


