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
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between">
          <span className="text-indigo-500">{post.authorId}</span>
          <span>{formattedTime}</span>
        </CardHeader>
        <CardContent>
          <p>{post.content} </p>
          <p></p>
        </CardContent>
      </Card>
    </>
  );
};

export default PostComponent;
