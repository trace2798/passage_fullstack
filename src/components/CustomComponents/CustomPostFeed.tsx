"use client";
// import { ExtendedPost } from "@/types/db";
// import { FC, useEffect, useState } from "react";
// import CustomPostCard from "./CustomPostCard";

// import {
//   PassageUserInfo,
//   getCurrentUserInfo,
// } from "@/actions/getCurrentUserInfo";

// interface PostFeedProps {
//   initialPosts: ExtendedPost[];
// }

// const CustomPostFeed: FC<PostFeedProps> = async ({ initialPosts }) => {
//   const posts = initialPosts;
//   const [userInfo, setUserInfo] = useState<PassageUserInfo | undefined>(
//     undefined
//   );
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchSessionInfo = async () => {
//       const sessionInfo = await getCurrentUserInfo();
//       setUserInfo(sessionInfo.userInfo);
//       setIsLoading(false);
//     };

//     fetchSessionInfo();
//   }, []);

//   return (
//     <>
//       <ul className="flex flex-col col-span-2 space-y-6 p-5 lg:px-[10vw]">
//         {posts.map((post, index) => {
//           if (index === posts.length - 1) {
//             // Add a ref to the last post in the list
//             return (
//               <li key={post.id}>
//                 <CustomPostCard post={post} />
//               </li>
//             );
//           } else {
//             return <CustomPostCard key={post.id} post={post} />;
//           }
//         })}
//       </ul>
//     </>
//   );
// };

// export default CustomPostFeed;

import { ExtendedPost } from "@/types/db";
import { FC, useEffect, useState } from "react";
import CustomPostCard from "./CustomPostCard";

import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";

interface PostFeedProps {
  initialPosts: ExtendedPost[];
}

const CustomPostFeed: FC<PostFeedProps> = ({ initialPosts }) => {
  const posts = initialPosts;
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

  return (
    <>
      <ul className="flex flex-col col-span-2 space-y-6 p-5 lg:px-[10vw]">
        {posts.map((post, index) => {
          if (index === posts.length - 1) {
            // Add a ref to the last post in the list
            return (
              <li key={post.id}>
                <CustomPostCard post={post} />
              </li>
            );
          } else {
            return <CustomPostCard key={post.id} post={post} />;
          }
        })}
      </ul>
    </>
  );
};

export default CustomPostFeed;
