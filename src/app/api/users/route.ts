import { NextResponse } from 'next/server';
import data from '@/data.json';

//find users

export async function GET() {
  return NextResponse.json({
    data,
  });
}