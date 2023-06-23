import GeneralFeed from "@/components/homepage/GeneralFeed";
import { FC } from "react";

interface feedProps {}

const feed: FC<feedProps> = ({}) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div>
          <h1 className="font-bold text-4xl text-center">
            Discover Milestones
          </h1>
          <GeneralFeed />
        </div>
      </main>
    </>
  );
};

export default feed;
