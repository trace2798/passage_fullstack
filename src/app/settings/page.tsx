import { FC } from "react";

import SettingsContent from "@/components/SettingsContent";
import Image from "next/image";

export const metadata = {
  title: "Post iT- Settings",
  description: "Authenticated using Passage."
}

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <main className="flex lg:mt-28 min-h-fit flex-col-reverse md:flex-row items-center justify-evenly py-7 px-12 md:p-24">
        <div>
          <SettingsContent />
        </div>
        <div className="max-md:w-60 max-md:h-60">
          <Image
            src="/images/settings.png"
            alt="settings"
            width={350}
            height={300}
          />
        </div>
      </main>
    </>
  );
};

export default page;
