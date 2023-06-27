import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { formatTimeToNow } from "@/lib/utils";
import { Post } from "@prisma/client";
import { Settings } from "lucide-react";

interface PostComponentProps {
  post: Post;
}

const PostComponent: FC<PostComponentProps> = ({ post }) => {
  // const formattedTime =
  //   post.createdAt === post.updatedAt
  //     ? formatTimeToNow(post.createdAt)
  //     : `updated ${formatTimeToNow(post.updatedAt)}`;
  const timeDiff = Math.abs(
    new Date(post.updatedAt).getTime() - new Date(post.createdAt).getTime()
  );
  const formattedTime =
    timeDiff < 1000
      ? formatTimeToNow(post.createdAt)
      : `updated ${formatTimeToNow(post.updatedAt)}`;

  return (
    <>
      <a href={`/dashboard/${post.id}`}>
        <Card className="md:w-[50vw]">
          <CardHeader className="flex flex-col md:flex-row justify-between">
            <span className="text-indigo-500 font-ranadeLight text-sm">
              {post.authorId}
            </span>
            <span className="font-ranadeLight text-sm">{formattedTime}</span>
          </CardHeader>
          <CardContent>
            <p className="font-ranadeRegular text-lg">{post.content} </p>
          </CardContent>
          <CardFooter>
            <p className="text-indigo-500 font-ranadeLight text-xs">
              Post ID: {post.id}
            </p>
          </CardFooter>
        </Card>
      </a>
    </>
  );
};

export default PostComponent;
