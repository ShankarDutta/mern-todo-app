import ChangeTask from "@/components/Forms/ChangeTask";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";

const EditTask = ({ taskId, taskName }) => {
  return (
    <Dialog>
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
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
