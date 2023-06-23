"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
// import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
