import CreatePost from "@/components/CreatePost";
import CustomFeed from "@/components/homepage/CustomFeed";
import Image from "next/image";

import { FC } from "react";

export const metadata = {
  title: "Post iT- Dashboard",
  description: "Authenticated using Passage."
}

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 md:mx-[10vw]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <CreatePost />
          <div className="w-fit h-fit">
            <Image
              src="/images/dashboard.png"
              alt="dashboard pic"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <CustomFeed />
      </main>
    </>
  );
};

export default page;
