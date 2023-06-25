interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}
export const siteConfig: SiteConfig = {
  name: "Post iT",
  description:
    "An open source application to post your milestones and more. Authenticated with Passage.",
  url: "https://appwrite-hashnode-hackathon.vercel.app/",
  ogImage: "https://appwrite-hashnode-hackathon.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/Tisonthemove247",
    github: "https://github.com/trace2798/appwrite_hackathon",
  },
};
