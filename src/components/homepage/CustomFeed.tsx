import { db } from "@/lib/db";
import PostFeed from "../PostFeed";
import { getUserInfo } from "@/actions/getUserInfo";
import Image from "next/image";

const CustomFeed = async ({}) => {
  const id = await getUserInfo();
  //console.log(id, "IDIDIDDIDI");
  const userId = id.props.userID;

  const posts = await db.post.findMany({
    where: {
      authorId: userId, // Corrected assignment syntax
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (posts.length === 0) {
    return (
      <>
        <h1 className="font-ranadeMedium text-lg md:text-2xl lg:py-3">
          No Post Found. Create your First Post
        </h1>
        <Image
          src="/images/create_post.png"
          alt="Empty State"
          width={700}
          height={700}
        />
      </>
    );
  }

  //console.log(posts);

  return (
    <>
      <div className="mt-10">
        <div className="flex">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-slate-900  to-slate-200 dark:from-neutral-100 dark:to-gray-800 text-4xl lg:text-5xl text-left w-full lg:px-[10vw] font-satoshiBold">
            Your Milestones
          </h1>
          <h3 className="text-neutral-400 text-4xl lg:text-5xl lg:px-[10vw] font-satoshiBold">{posts.length}</h3>
        </div>
        <PostFeed initialPosts={posts} />
        {/* <CustomPostFeed initialPosts={posts} /> */}
      </div>
    </>
  );
};

export default CustomFeed;
