import { ExtendedPost } from "@/types/db";
import { FC } from "react";
import PostCard from "./PostCard";

interface CustomPostFeedProps {
  initialPosts: ExtendedPost[];
}

const CustomPostFeed: FC<CustomPostFeedProps> = ({ initialPosts }) => {
  const posts = initialPosts;

  return (
    <>
      <ul className="flex flex-col col-span-2 space-y-6 p-5 lg:px-[10vw]">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomPostFeed;
