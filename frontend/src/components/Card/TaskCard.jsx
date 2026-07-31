import { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import DeleteTask from "./Actions/DeleteTask";
import EditTask from "./Actions/EditTask";

const TaskCard = ({ info }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={checked}
            onCheckedChange={(value) => setChecked(!!value)}
          />

          <CardTitle className={`${checked ? "line-through" : ""}`}>
            {info.text}
          </CardTitle>
        </div>

        <div className="space-x-2">
          <DeleteTask />

          <EditTask />
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
