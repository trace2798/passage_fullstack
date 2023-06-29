import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { formatTimeToNow } from "@/lib/utils";
import { Post } from "@prisma/client";
import Icons from "../Icons";

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
      <a className="group" href={`/dashboard/${post.id}`}>
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
            <p className="text-indigo-500 opacity-0 group-hover:opacity-100 dark:group-hover:text-white font-ranadeLight text-xs flex w-full justify-between">
              Post ID: {post.id}
              <Icons.Edit2 className=" " />
            </p>
          </CardFooter>
        </Card>
      </a>
    </>
  );
};

export default PostComponent;
