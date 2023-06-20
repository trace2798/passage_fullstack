import DashboardContent from "@/components/DashboardContent";
import Navbar from "@/components/Navbar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DashboardContent />
      </main>
    </>
  );
};

export default page;
