"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="xl:my-36 md:mt-44 mx-[10vw] lg:mx-[10vw] xl:mx-[15vw] flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-satoshiBlack">
            Looks like you are lost
          </h1>

          <Link href={"/feed"}>
            <Button variant={"default"} className="mt-4">
              Explore Feed
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"default"} className="mt-4 ml-24">
              Home
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src="/images/lost.png"
            width={500}
            height={500}
            alt="lost_image"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
