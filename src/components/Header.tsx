// "use client";

// import Link from "next/link";

// import { UserAccountNav } from "./UserAccountNav";
// import { getUserInfo } from "@/actions/getUserInfo";
// import { useState } from "react";
// import { Button } from "./ui/button";

// const Header = async () => {
//   const [authorize, setIsAuthorize] = useState(false);
//   const session = await getUserInfo();
//   if (session) {
//     setIsAuthorize(true);
//   }
//   return (
//     <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
//       <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
//         {/* logo */}
//         <Link href="/" className="flex gap-2 items-center">
//           {/* <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" /> */}
//           <p className="hidden text-zinc-700 text-sm font-medium md:block">
//             Breadit
//           </p>
//         </Link>

//         {/* search bar */}
//         {/* <SearchBar /> */}

//         {/* actions */}
//         {session?.props.isAuthorized ? (
//           <h1>MENUUUU</h1>
//         ) : (
//           <Link href="/auth">
//             <Button>Sign In</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
