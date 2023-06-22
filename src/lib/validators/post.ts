import { z } from "zod";

export const PostValidator = z.object({
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
