import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div>Protected route should not be visible without login</div>
    </>
  );
};

export default page;
