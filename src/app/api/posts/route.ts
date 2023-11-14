import { NextResponse } from "next/server";
import connect from "../../../../database/db";
import Post from "../../../../database/models/Post";

export const GET = async (req: any) => {
  try {
    await connect();  
    const posts = await Post.find();
    const response = {
      message: "Posts fetched successfully",
      data: posts,
    }  
    return new NextResponse(JSON.stringify(response), { status: 200 });  
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });  
  }
}
