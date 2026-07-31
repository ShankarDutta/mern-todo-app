import { addTaskSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Spinner } from "../ui/spinner";

const ChangeTask = ({ id, text }) => {
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

  const editTodo = (taskData) => {
    console.log(taskData);
    console.log(id);
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
