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
import { ThemeToggle } from "./ThemeToggle";

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
      <div className="pt-5 pb-2 shadow-md px-[10vw] flex justify-between">
        {!userInfo ? (
          <div className="w-full flex justify-between">
            <div className="inline-flex items-center">
              <Milestone className="mr-2" />
              <h1 className="font-satoshiBlack text-xl">Post It</h1>
            </div>
            <div>
              <ThemeToggle/>
              <Link href="/auth">
                <Button>Log In</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between">
              <Link href="/">
                <div className="inline-flex items-center">
                  <Milestone className="mr-2" />
                  <h1 className="font-satoshiBlack text-xl">Post It</h1>
                </div>
              </Link>
              <div>
                <ThemeToggle/>
              <UserAccountNav
                email={userInfo?.email}
                created_at={userInfo?.created_at}
                login_count={userInfo?.login_count}
              />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
