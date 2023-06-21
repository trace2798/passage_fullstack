import { db } from "@/lib/db";
import PostFeed from "../PostFeed";
// import { notFound } from "next/navigation";
import { getCurrentUserInfo } from "@/actions/getCurrentUserInfo";

const CustomFeed = async ({ ...userInfo }) => {
  if (!userInfo.id)
    return (
      <>
        <h1>No id found</h1>
      </>
    );

  const posts = await db.post.findMany({
    where: {
      authorId: userInfo.id, // Corrected assignment syntax
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(posts);

  return <PostFeed initialPosts={posts} />;
};

export default CustomFeed;
