import { addTaskSchema } from "@/lib/zodSchema";
import { updateTaskText } from "@/services/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Spinner } from "../ui/spinner";
import { toast } from "../ui/toast";

const ChangeTask = ({ id, text, onUpdateTask, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      text,
    },
    mode: "onChange",
  });

  const editTodo = async (taskData) => {
    try {
      const res = await updateTaskText(id, taskData);

      if (!res.success) {
        return toast.add({
          type: "error",
          description: "Failed to edit your task",
        });
      }

      onUpdateTask(res.task);
      onClose();
      return toast.add({
        type: "success",
        description: "Your task edited succesfully",
      });
    } catch (err) {
      console.error(err);

      return toast.add({
        type: "error",
        description: "Internal server error",
      });
    }
  };

  return (
    <form
      className="flex items-start gap-2"
      onSubmit={handleSubmit(editTodo)}
      noValidate>
      <Controller
        name="text"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Label
              htmlFor={field.name}
              className="sr-only">
              Edit Task
            </Label>

            <Input
              type="text"
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Add Your Task"
              autoComplete="off"
            />

            {fieldState.invalid && (
              <FieldError
                className="relative overflow-hidden"
                errors={[fieldState.error]}
              />
            )}
          </Field>
        )}
      />

      <Button
        className="cursor-pointer bg-blue-500 hover:bg-blue-600"
        type="submit"
        disabled={isSubmitting || !isDirty}
        size="default">
        {isSubmitting ?
          <Spinner />
        : "Add"}
      </Button>
    </form>
  );
};

export default ChangeTask;
