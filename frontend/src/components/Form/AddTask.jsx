import { addTaskSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";

const AddTask = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      text: "",
    },
    mode: "all",
  });

  const addTodo = (taskData) => {
    console.log(taskData);
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
