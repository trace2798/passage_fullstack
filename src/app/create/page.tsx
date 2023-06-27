import CreatePost from "@/components/CreatePost";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-10 md:mx-[10vw]">
        <Image
          src="/images/create_page.png"
          width={400}
          height={400}
          alt="a girl sitting on top of bar graph"
        />
        <div className="mt-10 w-full">
          <CreatePost />
        </div>
      </main>
    </>
  );
};

export default page;
