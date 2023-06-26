import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import CreatePostDialog from "./CreatePostDialog";

export function PostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">+ Add a Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <CreatePostDialog />
      </DialogContent>
    </Dialog>
  );
}
