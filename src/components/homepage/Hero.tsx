"use client";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/auth");
  };
  return (
    <>
      <div className=" my-10 md:mt-44 mx-[10vw] lg:mx-[20vw] flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">
            Post it - Your thoughts, your way
          </h1>
          <h2 className="text-3xl mt-10">
            Easily share your ideas and connect with others using{" "}
            <span className="font-black bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-purple-500 to-red-500 animate-text">
              Passage&nbsp;{" "}
            </span>
            authentication
          </h2>
          <h3 className="text-xl mt-5">
            This is my submission for 1Password X Passage X Hashnode hackathon
          </h3>
          <Button onClick={handleClick} className="mt-5 w-32">
            Log In
          </Button>
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
