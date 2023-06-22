import { db } from "@/lib/db";
import PostFeed from "../PostFeed";
// import { notFound } from "next/navigation";
import { getCurrentUserInfo } from "@/actions/getCurrentUserInfo";
import { getUserInfo } from "@/actions/getUserInfo";

const CustomFeed = async ({}) => {
  const id = await getUserInfo();
  console.log(id, "IDIDIDDIDI");
  const userId = id.props.userID;
  
  const posts = await db.post.findMany({
    where: {
      authorId: userId, // Corrected assignment syntax
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(posts);

  return <PostFeed initialPosts={posts} />;
};

export default CustomFeed;
