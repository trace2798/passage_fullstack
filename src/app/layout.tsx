import Providers from "@/components/Providers";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import Box from "@/components/Box";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Post iT- Share your Milestones.",
  description: "Authenticated using Passage.",
  keywords: ["Next.js", "Passage"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@Tisonthemove247",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="mt-14">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
