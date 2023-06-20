import { Passage } from "@passageidentity/passage-js";

export interface PassageUserInfo {
  email: string;
  created_at: string;
  login_count: number;
}

export async function getCurrentUserInfo() {
  const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  try {
    const user = passage.getCurrentUser();
    const userInfo = await user.userInfo();
    console.log(userInfo)
    return {
      userInfo,
      email: userInfo?.email,
      created_at: userInfo?.created_at
    };
  } catch (error) {
    console.log(error);
  }
  return { userInfo: undefined, email: undefined, created_at: undefined };
}
