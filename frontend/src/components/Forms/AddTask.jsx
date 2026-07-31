import { addTaskSchema } from "@/lib/zodSchema";
import { createTask } from "@/services/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "../ui/toast";

const AddTask = ({ onTaskAdded }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      text: "",
    },
    mode: "all",
  });

  const addTodo = async (taskData) => {
    try {
      const res = await createTask(taskData);

      if (!res.success) {
        return toast.add({
          type: "error",
          description: "Failed to create task.",
        });
      }

      toast.add({
        type: "success",
        description: "Task Added Successfully",
      });

      onTaskAdded(res.task);
      reset();
    } catch (err) {
      toast.add({
        type: "error",
        description: "Unable to create task. Please try again.",
      });

      console.error("Failed to create task:", err);
    }
  };

  return (
    <form
      className="flex items-start gap-2"
      onSubmit={handleSubmit(addTodo)}
      noValidate>
      <Controller
        name="text"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Label
              htmlFor={field.name}
              className="sr-only">
              Task
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
        disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add"}
      </Button>
    </form>
  );
};

export default AddTask;
