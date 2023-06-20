"use client";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { FC, useEffect, useState } from "react";
import { UserAccountNav } from "./UserAccountNav";

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
    <h1>Not logged in</h1>;
  }

  return (
    <>
      <div className="p-5 border border-black flex justify-between">
        <h1>Navbar</h1>
        <UserAccountNav
          email={userInfo?.email}
          created_at={userInfo?.email}
          login_count={userInfo?.login_count}
        />
      </div>
    </>
  );
};

export default Navbar;
