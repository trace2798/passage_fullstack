// import { db } from "@/lib/db";
// import { Passage } from "@passageidentity/passage-js";

// export default async function handler(req: any, res: any) {
//   try {
//     // Verify the user's session with Passage
//     const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
//     const session = await passage.getCurrentSession(req);

//     // Retrieve the user's id from the session object
//     const id = session?.user?.id;

//     // Use the user id to query the database using Prisma
//     const userData = await db.post.findMany({
//       where: {
//         authorId: id,
//       },
//     });

//     // Return the user data to the client
//     res.status(200).json(userData);
//   } catch (error) {
//     // Handle any errors that occur
//     res.status(500).json({ error });
//   }
// }

import { db } from "@/lib/db";

export default async function handler(req: any, res: any) {
  try {
    // Retrieve the user's id from the query parameters
    const id = req.query.id;

    // Use the user id to query the database using Prisma
    const userData = await db.post.findMany({
      where: {
        authorId: id,
      },
    });

    // Return the user data to the client
    res.status(200).json(userData);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error });
  }
}

