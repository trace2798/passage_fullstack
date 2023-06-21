// import { Passage } from "@passageidentity/passage-js";

import { getCurrentUserInfo } from "./getCurrentUserInfo";

// export async function getUserData() {
//   // Retrieve the current user's information using Passage
//   const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
//   const user = passage.getCurrentUser();
//   const userInfo = await user.userInfo();
//   const id = userInfo?.id;

//   // Make a request to the API route, passing the user's id as a query parameter
//   const response = await fetch(`/api/auth?id=${id}`);
//   const userData = await response.json();

//   // Use the returned user data
//   console.log(userData, "USER DATA");
// }

export async function getPosyByUserId() {
  const { id } = await getCurrentUserInfo();
  console.log(id);
  return id;
}
