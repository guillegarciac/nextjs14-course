import { NextResponse } from 'next/server';
import data from '@/data.json';

//find user by id with params from context and dynamic route

export async function GET(req: Request, context: any) {
  const { params } = context;
  const user = data.find((x) => params.userId === x.id.toString()); 

  return NextResponse.json({
    user,
  });
}