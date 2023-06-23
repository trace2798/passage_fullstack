import CreatePost from "@/components/CreatePost";
import DashboardContent from "@/components/DashboardContent";
import Navbar from "@/components/Navbar";
import CustomFeed from "@/components/homepage/CustomFeed";
// import CustomFeed from "@/components/homepage/CustomFeed";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <CreatePost />
        <CustomFeed />
      </main>
    </>
  );
};

export default page;
