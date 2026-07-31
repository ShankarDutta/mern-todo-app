import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";

const EditTask = () => {
  return (
    <Button
      variant="secondary"
      type="button">
      <EditIcon />
    </Button>
  );
};

export default EditTask;
