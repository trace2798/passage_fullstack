"use client";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { FC, useEffect, useState } from "react";
import { UserAccountNav } from "./UserAccountNav";
import Link from "next/link";
import { Button } from "./ui/button";

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

  if (!userInfo) {
    <div className="p-5 border border-black flex justify-between">
      <h1>Navbar not logged in </h1>
      <h1>Log In</h1>
    </div>;
  }

  return (
    <>
      <div className="p-5 border border-black flex justify-between">
        {!userInfo ? (
          <div className="p-5 w-full border border-black inline-flex justify-between">
            <h1>Post It</h1>
            <Link href="/auth">
              <Button>Log In</Button>
            </Link>
          </div>
        ) : (
          <>
            <Link href='/'>Post It</Link>
            <UserAccountNav
              email={userInfo?.email}
              created_at={userInfo?.created_at}
              login_count={userInfo?.login_count}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
