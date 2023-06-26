"use client";
import Image from "next/image";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { ClipLoader } from "react-spinners";
import Link from "next/link";

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
    return (
      <div className="xl:my-44 md:mt-24 mx-[10vw] lg:mx-[20vw] flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-satoshiBlack">
            Post iT - Milestones, memories, and more
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

          <Button className="mt-5 w-32">
            {" "}
            <ClipLoader color="#36d7b7" />
          </Button>
        </div>
      </div>
    );
  }
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/auth");
  };
  return (
    <>
      <div className="xl:my-36 mt-10 md:mt-24 mx-[10vw] lg:mx-[10vw] xl:mx-[15vw] flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-satoshiBlack">
            Post iT - Milestones, memories, and more
          </h1>
          <div className="md:hidden">
            <Image
              src="/images/meet.png"
              alt="hero-image"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
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
            This is my submission for 1Password X Passage X Hashnode hackathon.{" "}
            <a
              href="https://shreyas-chaliha.hashnode.dev/share-your-milestones-and-memories-with-post-it"
              target="_blank"
              className="underline hover:cursor-pointer text-base hover:text-indigo-500"
            >
              Hashnode Article
            </a>
          </h3>
          {!userInfo ? (
            <Button onClick={handleClick} className="mt-5 w-32">
              Log In
            </Button>
          ) : (
            <>
              <h1 className="font-satoshiBold text-lg mt-4">
                Welcome Back&nbsp;
                <br />
                <span className="font-ranadeRegular text-base border border-slate-800 rounded-lg bg-slate-800 text-neutral-200">
                  {userInfo.email}
                </span>
              </h1>
              <Link href={"/discover"}>
                <Button variant={"default"} className="mt-4">
                  Discover Feed
                </Button>
              </Link>
            </>
          )}
        </div>
        <div className="collapse md:visible">
          <Image
            src="/images/meet.png"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
