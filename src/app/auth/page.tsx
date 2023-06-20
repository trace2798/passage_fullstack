import Auth from "@/components/Auth";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Auth />
      </main>
    </>
  );
};

export default page;
