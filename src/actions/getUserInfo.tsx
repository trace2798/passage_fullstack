import Passage from "@passageidentity/passage-node";
import { cookies } from "next/headers";

export async function getUserInfo() {
  // Create a new instance of the Passage class
  const passage = new Passage({
    appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
    apiKey: process.env.NEXT_PUBLIC_PASSAGE_API_KEY!,
    authStrategy: "HEADER",
  });

  try {
    // Get the cookies from the incoming request
    const cookieStore = cookies();

    // Retrieve the auth token from the cookies
    const authToken = cookieStore.get("psg_auth_token");

    // Create the request object with the authorization header
    const req = {
      headers: {
        authorization: `Bearer ${authToken?.value}`,
      },
    };

    // Authenticate the request with Passage and get the user ID
    const userID = await passage.authenticateRequest(req);

    if (userID) {
      // User is authenticated
      //console.log(userID, "cdtsvbhjknscduybcbcd");

      // Retrieve the user's email and phone number from Passage
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      return {
        props: {
          isAuthorized: true,
          username: identifier,
          appID: passage.appID,
          userID: userID,
        },
      };
    }
  } catch (error) {
    //console.log(error);
  }

  // Return default props if the user is not authorized
  return { props: { isAuthorized: false, username: "", appID: passage.appID } };
}
