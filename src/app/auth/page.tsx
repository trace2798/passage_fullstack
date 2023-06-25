import Auth from "@/components/Auth";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="flex min-h-fit flex-col items-center justify-between pt-24 px-2 md:p-24">
        <Auth />
      </main>
    </>
  );
};

export default page;
