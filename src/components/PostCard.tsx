import { ExtendedPost } from "@/types/db";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatTimeToNow } from "@/lib/utils";

interface PostComponentProps {
  post: ExtendedPost;
}

const PostComponent: FC<PostComponentProps> = ({ post }) => {
  const formattedTime = formatTimeToNow(post.createdAt);
  return (
    <>
      <Card className="md:w-[50vw]">
        <CardHeader className="flex flex-col md:flex-row justify-between">
          <span className="text-indigo-500 font-ranadeLight text-sm">{post.authorId}</span>
          <span className="font-ranadeLight text-sm">{formattedTime}</span>
        </CardHeader>
        <CardContent>
          <p className="font-ranadeRegular text-lg">{post.content} </p>
          <p></p>
        </CardContent>
      </Card>
    </>
  );
};

export default PostComponent;
