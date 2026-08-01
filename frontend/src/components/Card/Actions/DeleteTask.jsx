import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import { delTask } from "@/services/tasks";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

const DeleteTask = ({ id, deletedTaskId }) => {
  const [loading, setLoading] = useState(false);

  const deleteButtonHandler = async () => {
    setLoading(true);

    try {
      const res = await delTask(id);

      if (!res.success) {
        toast.add({
          type: "error",
          description: res.message,
        });
        return;
      }

      deletedTaskId(id);

      toast.add({
        type: "success",
        description: res.message,
      });
    } catch {
      toast.add({
        type: "error",
        description: "Internal Server Error!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="destructive"
      type="button"
      disabled={loading}
      onClick={deleteButtonHandler}>
      {loading ?
        <Spinner />
      : <Trash2Icon />}
    </Button>
  );
};

export default DeleteTask;
