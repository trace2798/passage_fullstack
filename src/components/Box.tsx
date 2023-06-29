import { FC } from "react";
import { PostDialog } from "./Dialog";

interface BoxProps {}

const Box: FC<BoxProps> = ({}) => {
  return (
    <>
      <div className="fixed right-8 md:-right-3 w-fit  md:w-80 bottom-8 overflow-hidden">
        <PostDialog />
      </div>
    </>
  );
};

export default Box;
