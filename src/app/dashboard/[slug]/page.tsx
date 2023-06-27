import UpdatePost from "@/components/UpdatePost";
import { db } from "@/lib/db";
import { Trash } from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;
  const post = await db.post.findFirst({
    where: { id: slug },
  });

  if (!post) return notFound();
  return (
    <>
      <div className="my-24 xl:my-44 md:mt-24 mx-[10vw] xl:mx-[20vw]">
        {/* <DeletePost postId={slug} /> */}

        <UpdatePost
          postId={slug}
          content={post.content}
          author_id={post.authorId}
        />
      </div>
    </>
  );
};

export default page;
