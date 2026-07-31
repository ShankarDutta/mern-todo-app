import { updateTask } from "@/services/tasks";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { toast } from "../ui/toast";
import DeleteTask from "./Actions/DeleteTask";
import EditTask from "./Actions/EditTask";

const TaskCard = ({ info, onTaskDeleted, onTaskUpadted }) => {
  const [checked, setChecked] = useState(info.completed);

  const handleCompleted = async (value) => {
    const completed = !!value;

    setChecked(completed);

    try {
      const res = await updateTask(info._id, completed);

      if (!res.success) {
        setChecked(!completed); // rollback

        return toast.add({
          type: "error",
          description: "Failed to update task",
        });
      }

      toast.add({
        type: "success",
        description: completed ? "Task completed" : "Task marked as incomplete",
      });
    } catch (error) {
      setChecked(!completed);

      toast.add({
        type: "error",
        description: "Something went wrong",
      });

      console.error(error);
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={checked}
            onCheckedChange={handleCompleted}
          />

          <CardTitle className={`${checked ? "line-through" : ""}`}>
            {info.text}
          </CardTitle>
        </div>

        <div className="space-x-2">
          <DeleteTask
            id={info._id}
            deletedTaskId={onTaskDeleted}
          />

          <EditTask
            taskId={info._id}
            taskName={info.text}
            onUpdateTaskText={onTaskUpadted}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
