import { getUserInfo } from "@/actions/getUserInfo";
import { PostDialog } from "@/components/Dialog";
import GeneralFeed from "@/components/feed/GeneralFeed";
import { FC } from "react";

export const metadata = {
  title: "Post iT- Discover",
  description: "Authenticated using Passage."
}

interface feedProps {}

const feed: FC<feedProps> = async ({}) => {
  const id = await getUserInfo();
  const userId = id.props.userID;

  if (!userId) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
          <div className="items-center">
            <h1 className="font-bold text-4xl text-center">
              Discover Milestones
            </h1>
          </div>

          <GeneralFeed />
        </main>
      </>
    );
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="items-center">
          <h1 className="font-bold text-4xl text-center">
            Discover Milestones
          </h1>
        </div>
        <div className="my-5">
          <PostDialog />
        </div>
        <GeneralFeed />
      </main>
    </>
  );
};

export default feed;
