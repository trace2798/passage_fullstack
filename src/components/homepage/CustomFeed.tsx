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

  return (
    <>
      {" "}
      <div className="mt-10">
        <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-slate-900  to-slate-200 text-3xl lg:text-5xl font-bold text-left w-full lg:px-[10vw]">
          Your Past Post
        </h1>
        <PostFeed initialPosts={posts} />
      </div>
    </>
  );
};

export default CustomFeed;
