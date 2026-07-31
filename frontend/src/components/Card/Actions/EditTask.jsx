import ChangeTask from "@/components/Forms/ChangeTask";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import { useState } from "react";

const EditTask = ({ taskId, taskName, onUpdateTaskText }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="secondary"
            type="button">
            <EditIcon />
          </Button>
        }
      />

      <DialogContent>
        <DialogTitle>Change Your Task</DialogTitle>
        <ChangeTask
          id={taskId}
          text={taskName}
          onUpdateTask={onUpdateTaskText}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
