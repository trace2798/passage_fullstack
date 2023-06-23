import { getUserInfo } from "@/actions/getUserInfo";
import { db } from "@/lib/db";

export async function DELETE(req: Request) {
  try {
    const postId = await req.json();
    const userInfo = await getUserInfo();
    const id = userInfo.props.userID;
    // Check if postId exists or meets certain criteria before deletion
    // ...

    if (!id) {
      return new Response("Unauthorized", { status: 401 });
    }

    await db.post.delete({
      where: {
        id: postId,
      },
    });

    return new Response("Post deleted successfully");
  } catch (error) {
    return new Response("Could not delete post. Please try again later", {
      status: 500,
    });
  }
}
