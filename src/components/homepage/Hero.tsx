"use client";
import Image from "next/image";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const router = useRouter();
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
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/auth");
  };
  return (
    <>
      <div className=" my-10 md:mt-44 mx-[10vw] lg:mx-[20vw] flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-satoshiBlack">
            Post it - Milestones, memories, and more
          </h1>
          <h2 className="text-3xl font-satoshiBold mt-10">
            Easily share your milestones, memories and ideas to the world.{" "}
            <br />
            Made using{" "}
            <span className="font-satoshiBlack bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-purple-500 to-red-500 animate-text">
              Passage&nbsp;{" "}
            </span>
            authentication
          </h2>
          <h3 className="text-xl mt-5 font-ranadeRegular">
            This is my submission for 1Password X Passage X Hashnode hackathon
          </h3>
          {!userInfo ? (
            <Button onClick={handleClick} className="mt-5 w-32">
              Log In
            </Button>
          ) : (
            <>
              <h1 className="font-satoshiBold text-lg mt-4">
                Welcome Back&nbsp;
                <span className="font-ranadeRegular text-base border border-slate-800 px-2 rounded-lg bg-slate-800 text-neutral-200">{userInfo.email}</span>
              </h1>
            </>
          )}
        </div>
        <div>
          <Image
            src="/images/hero.jpg"
            alt="hero-image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
