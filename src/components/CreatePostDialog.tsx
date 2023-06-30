"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { PostCreationRequest } from "@/lib/validators/post";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "./ui/use-toast";

interface pageProps {}

const CreatePostDialog: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const { loginToast } = useCustomToasts();
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: PostCreationRequest = {
        content: input,
      };

      const { data } = await axios.post("/api/post/create", payload);
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
        description: "Could not create post.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Post created successfully.",
        description: "Your post has been published.",
        variant: "default",
      });
      setInput("");
    },
  });
  return (
    <>
      <div className="w-full flex items-center h-full max-w-3xl mx-auto">
        <div className="relative bg-gray-100 dark:bg-slate-800 w-full h-fit p-4 rounded-lg space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-satoshiMedium">
              Create a milestone, memory you want to share.
            </h1>
          </div>

          <hr className="bg-red-500 dark:bg-indigo-200 h-[2px]" />

          <div>
            <p className="text-lg font-satoshiMedium">Content</p>
            <p className="text-xs pb-2 font-ranadeLightItalic">
              Post can be edited later.
            </p>
            <div className="relative">
              <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400"></p>
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
              onClick={() => createPost()}
            >
              Publish Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostDialog;
