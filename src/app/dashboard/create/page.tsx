"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  return (
    <>
      <div className="container flex items-center h-full max-w-3xl mx-auto">
        <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Create a Post</h1>
          </div>

          <hr className="bg-red-500 h-px" />

          <div>
            <p className="text-lg font-medium">Title</p>
            <p className="text-xs pb-2">
              Post including capitalization cannot be changed.
            </p>
            <div className="relative">
              <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">
                
              </p>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="pl-6"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              // disabled={isLoading}
              variant="ghost"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              // isLoading={isLoading}
              disabled={input.length === 0}
              // onClick={() => createCommunity()}
            >
              Create Community
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
