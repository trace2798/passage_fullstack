"use client";
import { FC, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import { format } from "date-fns";
import { Button } from "./ui/button";
import Link from "next/link";
import { BounceLoader } from "react-spinners";

interface SettingsContentProps {}

const SettingsContent: FC<SettingsContentProps> = ({}) => {
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

  let formattedCreatedAt = "";
  if (userInfo?.created_at) {
    formattedCreatedAt = format(
      new Date(userInfo.created_at),
      "yyyy-MM-dd HH:mm:ss"
    );
  }

  const info = [
    {
      title: "Your email id",
      description: `${userInfo?.email}`,
    },
    {
      title: "Your User Id",
      description: `${userInfo?.id}`,
    },
    {
      title: "Account created at",
      description: `${formattedCreatedAt}`,
    },
    {
      title: "Number of times logged in",
      description: `${userInfo?.login_count}`,
    },
  ];

  if (isLoading) {
    // Render loading state if the session information is still being fetched
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>User Info</CardTitle>
          <CardDescription>Your Information</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 items-center">
          <BounceLoader color="#36d7b7" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="/">Back to Home </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>User Info</CardTitle>
          <CardDescription>Your Information</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {userInfo?.name}
          <div>
            {info.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="/">Back to Home </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SettingsContent;
