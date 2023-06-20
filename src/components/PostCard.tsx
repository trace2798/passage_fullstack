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
        <CardHeader>{post.content}</CardHeader>
        <CardContent>
          <p>By: {post.authorId}</p>
          <p>{formattedTime}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default PostComponent;
