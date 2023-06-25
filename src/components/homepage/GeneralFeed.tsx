import { db } from "@/lib/db";
import PostFeed from "../PostFeed";

const GeneralFeed = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  //console.log(posts);

  return (
    <>
      <PostFeed initialPosts={posts} />
    </>
  );
};

export default GeneralFeed;
