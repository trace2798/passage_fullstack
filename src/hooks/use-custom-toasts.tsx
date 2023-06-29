import { buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

import Link from "next/link";

export const useCustomToasts = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required.",
      description: "You need to be logged in to do that.",
      variant: "destructive",
      action: (
        <Link
          onClick={() => dismiss()}
          href="/auth"
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      ),
    });
  };

  const forbiddenToast = () => {
    const { dismiss } = toast({
      title: "Forbidden. But good try hacker.",
      description: "You can only update your own post.",
      variant: "destructive",
    });
  };

  return { loginToast, forbiddenToast };
};
