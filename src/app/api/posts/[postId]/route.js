import { NextResponse } from "next/server";
import Post from "../../../../models/Post";
import connect from "../../../../utils/db";

export const GET = async (request, { params }) => {
  const { postId } = params;
  try {
    await connect();
    const post = await Post.findById(postId);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.message, { status: 400 });
  }
};
