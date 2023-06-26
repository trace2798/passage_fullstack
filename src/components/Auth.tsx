"use client";
import { FC, useEffect } from "react";
import { toast } from "./ui/use-toast";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);
  return (
    <>
      <div className="bg-neutral-200 rounded-lg">
        <passage-auth
          app-id={process.env.NEXT_PUBLIC_PASSAGE_APP_ID}
        ></passage-auth>
      </div>
    </>
  );
};

export default Auth;
