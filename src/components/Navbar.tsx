"use client";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { FC, useEffect, useState } from "react";
import { UserAccountNav } from "./UserAccountNav";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon, Milestone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ClipLoader } from "react-spinners";

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
    return (
      <div className="pt-5 pb-2 shadow-md dark:shadow-sm dark:shadow-blue-50 px-[10vw] flex justify-between">
        <div className="w-full flex justify-between">
          <div className="inline-flex items-center">
            <Milestone className="mr-2" />
            <h1 className="font-satoshiBlack text-xl">Post iT</h1>
          </div>
          <div className="inline-flex items-center">
            <a
              href="https://github.com/trace2798/passage_fullstack"
              target="_blank"
            >
              <GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
            </a>
            <ThemeToggle />
            <Link href="/auth" className="ml-2">
              <Button>
                <ClipLoader color="#36d7b7" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-5 pb-2 shadow-md dark:shadow-sm dark:shadow-blue-50 px-[10vw] flex justify-between">
        {!userInfo ? (
          <div className="w-full flex justify-between">
            <div className="inline-flex items-center">
              <Milestone className="mr-2" />
              <h1 className="font-satoshiBlack text-xl">Post iT</h1>
            </div>
            <div className="inline-flex items-center">
              <a
                href="https://github.com/trace2798/passage_fullstack"
                target="_blank"
              >
                <GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
              </a>
              <ThemeToggle />
              <Link href="/auth" className="ml-2">
                <Button>Log In</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between">
              <Link href="/">
                <div className="inline-flex items-center hover:cursor-pointer mt-1">
                  <Milestone className="mr-2" />
                  <h1 className="font-satoshiBlack text-xl">Post iT</h1>
                </div>
              </Link>
              <div className="inline-flex items-center">
                <a
                  href="https://github.com/trace2798/passage_fullstack"
                  target="_blank"
                >
                  <GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
                </a>
                <ThemeToggle />
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
