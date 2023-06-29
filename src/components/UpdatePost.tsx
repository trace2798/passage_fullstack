"use client";
import { PostUpdateRequest } from "@/lib/validators/post";
import axios, { AxiosError } from "axios";
import { FC, useState } from "react";
import { toast } from "./ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { useCustomToasts } from "@/hooks/use-custom-toasts";

interface UpdatePostProps {
  postId: string;
  content: string;
  author_id: string;
}

const UpdatePost: FC<UpdatePostProps> = ({ postId, content, author_id }) => {
  const router = useRouter();
  const [input, setInput] = useState<string>(content);
  const { loginToast } = useCustomToasts();
  const { mutate: updatePost, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: PostUpdateRequest = {
        author_id,
        content: input,
        postId,
      };

      const { data } = await axios.patch(`/api/post/update`, payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      toast({
        title: "There was an error.",
        description: "Could not update post.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Post updated successfully.",
        description: "Your post has been updated.",
        variant: "default",
      });
      router.push("/discover");
    },
  });

  return (
    <>
      <div>
        <div className="w-full flex flex-col md:flex-row items-center h-full mx-auto">
          <Image
            src="/images/update_page.svg"
            className="rounded-xl dark:bg-neutral-300"
            width={350}
            height={350}
            alt="update post pic"
          />
          <div className="relative bg-neutral-100 dark:bg-slate-800 w-full h-fit p-4 rounded-lg space-y-6 md:ml-10 mt-10">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-satoshiMedium">Update your post</h1>
            </div>

            <hr className="bg-red-500 dark:bg-indigo-200 h-[2px]" />

            <div>
              <p className="text-lg font-satoshiMedium">Title</p>
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="pl-6"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                disabled={isLoading || input.length === 0}
                variant="ghost"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading || input.length === 0}
                onClick={() => updatePost()}
              >
                Update Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
