import { z } from "zod";

export const PostValidator = z.object({
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;


export const PostUpdateValidator = z.object({
  content: z.any(),
  author_id: z.string(),
  postId: z.string(),
});

export type PostUpdateRequest = z.infer<typeof PostUpdateValidator>;
