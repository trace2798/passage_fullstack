import { formatTimeToNow } from "@/lib/utils";
import { ExtendedPost } from "@/types/db";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "./ui/card";

interface PostComponentProps {
  post: ExtendedPost;
}

const PostComponent: FC<PostComponentProps> = async ({ post }) => {
  // const formattedTime = formatTimeToNow(post.createdAt);
  const timeDiff = Math.abs(
    new Date(post.updatedAt).getTime() - new Date(post.createdAt).getTime()
  );
  const formattedTime =
    timeDiff < 1000
      ? formatTimeToNow(post.createdAt)
      : `updated ${formatTimeToNow(post.updatedAt)} created ${formatTimeToNow(
          post.createdAt
        )} `;

  return (
    <>
      <Card className="md:w-[50vw]">
        <CardHeader className="flex flex-col lg:flex-row justify-between">
          <span className="text-indigo-500 font-ranadeLight text-sm">
            @{post.authorId}
          </span>
          <span className="font-ranadeLight text-sm">{formattedTime}</span>
        </CardHeader>
        <CardContent>
          <p className="font-ranadeRegular text-lg">{post.content} </p>
        </CardContent>
        <CardFooter>
          <p className="text-indigo-500 font-ranadeLight text-[8px]">Post id: {post.id}</p></CardFooter>
      </Card>
    </>
  );
};

export default PostComponent;
