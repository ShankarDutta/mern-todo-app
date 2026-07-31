import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

const DeleteTask = () => {
  return (
    <Button
      variant="destructive"
      type="button">
      <Trash2Icon />
    </Button>
  );
};

export default DeleteTask;
