import { getUserInfo } from "@/actions/getUserInfo";
import { db } from "@/lib/db";
import { PostValidator } from "@/lib/validators/post";

import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content } = PostValidator.parse(body);
    const userInfo = await getUserInfo();
    const id = userInfo.props.userID;

    if (!id) {
      return new Response("Unauthorized", { status: 401 });
    }

    await db.post.create({
      data: {
        content,
        authorId: id,
      },
    });

    return new Response("Post created successfully");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response("Could not post at this time. Please try later", {
      status: 500,
    });
  }
}
