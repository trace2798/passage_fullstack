"use client";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { FC, useEffect, useState } from "react";
import { UserAccountNav } from "./UserAccountNav";
import Link from "next/link";
import { Button } from "./ui/button";
import { Milestone } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [userInfo, setUserInfo] = useState<PassageUserInfo | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessionInfo = async () => {
      const sessionInfo = await getCurrentUserInfo();
      setUserInfo(sessionInfo.userInfo);
      setIsLoading(false);
    };

    fetchSessionInfo();
  }, []);

  if (isLoading) {
    // Render loading state if the session information is still being fetched
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-5 shadow-md px-[10vw] flex justify-between">
        {!userInfo ? (
          <div className="w-full flex justify-between">
            <div className="inline-flex items-center">
              <Milestone className="mr-2" />
              <h1 className="font-black text-xl">Post It</h1>
            </div>
            <Link href="/auth">
              <Button>Log In</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between">
              <Link href="/">
                <div className="inline-flex items-center">
                  <Milestone className="mr-2" />
                  <h1 className="font-black text-xl">Post It</h1>
                </div>
              </Link>
              <UserAccountNav
                email={userInfo?.email}
                created_at={userInfo?.created_at}
                login_count={userInfo?.login_count}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
