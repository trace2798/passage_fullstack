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
    "An open source application to post your milestones and more. Authentication with Passage.",
  url: "http://localhost:3000",
  ogImage: "http://localhost:3000/og.jpg",
  links: {
    twitter: "https://twitter.com/Tisonthemove247",
    github: "https://github.com/trace2798/passage_fullstack",
  },
};
