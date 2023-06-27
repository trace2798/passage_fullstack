import { getUserInfo } from "@/actions/getUserInfo";
import { db } from "@/lib/db";
import { PostUpdateValidator, PostValidator } from "@/lib/validators/post";

import { z } from "zod";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { content, postId } = PostUpdateValidator.parse(body);
    const userInfo = await getUserInfo();
    const id = userInfo.props.userID;

    if (!id) {
      return new Response("Unauthorized", { status: 401 });
    }

    await db.post.update({
      where: { id: postId },
      data: {
        content,
        authorId: id,
      },
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response("Could not post at this time. Please try later", {
      status: 500,
    });
  }
}