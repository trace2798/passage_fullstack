import { FC } from "react";

import SettingsContent from "@/components/SettingsContent";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SettingsContent />
      </main>
    </>
  );
};

export default page;
