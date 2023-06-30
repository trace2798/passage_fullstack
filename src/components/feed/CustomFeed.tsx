import { getUserInfo } from "@/actions/getUserInfo";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import CustomPostFeed from "../CustomComponents/CustomPostFeed";
import { Button } from "../ui/button";

const CustomFeed = async ({}) => {
  const id = await getUserInfo();
  //console.log(id, "IDIDIDDIDI");
  const userId = id.props.userID;

  const posts = await db.post.findMany({
    where: {
      authorId: userId, // Corrected assignment syntax
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  if (posts.length === 0) {
    return (
      <>
        <h1 className="font-ranadeMedium text-lg md:text-2xl lg:py-3">
          No Post Found. Create your First Post
        </h1>
        <Link href="/create">
          <Button variant={"default"}>Create</Button>
        </Link>
        <Image
          src="/images/empty_state.png"
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

          <h3 className="text-neutral-400 text-4xl lg:text-5xl lg:px-[10vw] font-satoshiBold">
            {posts.length}
          </h3>
        </div>
        <h2 className="text-left text-sm text-slate-700 dark:text-neutral-400 w-full lg:px-[11vw] font-ranadeMedium">You can click on the post here to update it.</h2>
        <CustomPostFeed initialPosts={posts} />
        {/* <CustomPostFeed initialPosts={posts} /> */}
      </div>
    </>
  );
};

export default CustomFeed;
