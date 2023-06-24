import { ExtendedPost } from "@/types/db";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatTimeToNow } from "@/lib/utils";


interface PostComponentProps {
  post: ExtendedPost;
}

const PostComponent: FC<PostComponentProps> = async ({ post }) => {
  
  const formattedTime = formatTimeToNow(post.createdAt);
  return (
    <>
      <Card className="md:w-[50vw]">
        <CardHeader className="flex flex-col md:flex-row justify-between">
          <span className="text-indigo-500 font-ranadeLight text-sm">
            @{post.authorId}
          </span>
          <span className="font-ranadeLight text-sm">{formattedTime}</span>
        </CardHeader>
        <CardContent>
          <p className="font-ranadeRegular text-lg">{post.content} </p>
        </CardContent>
        <CardFooter>
          <p className="text-indigo-500 font-ranadeLight text-xs">
            Post ID:&nbsp;{post.id}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostComponent;
