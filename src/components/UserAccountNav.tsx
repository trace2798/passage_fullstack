"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Passage } from "@passageidentity/passage-js";
// import { useRouter } from "next/navigation";
import Icons from "./Icons";


interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string | undefined;
  created_at: string | undefined;
  login_count: number | undefined;
}

export function UserAccountNav({ email }: UserAccountNavProps) {
  // const router = useRouter();
  const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  const session = passage.getCurrentSession();
  console.log(session, 'session SESSION')
  const handleLogout = () => {
    session.signOut();
    // router.push("/");
    window.location.reload();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex items-center p-2">
          <Icons.MenuSquare className="mr-2" />
          <h1 className="font-semibold text-blg">Menu</h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-100 dark:bg-slate-900" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/discover">Discover</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/create">Create Post</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
