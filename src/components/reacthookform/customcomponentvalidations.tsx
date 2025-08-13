import * as React from "react";
import { useForm, useController } from "react-hook-form";

function Input({ control, name }: { control: any; name: string }) {
  const { field, fieldState } = useController({ name, control, rules: { required: true } });
  return (
        <div>
            <input {...field} placeholder={name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "Invalid" : "Valid"}</p>
        </div>
  );
}
 
export default function CustomValidatorComponent() {
  const { handleSubmit, control } = useForm({ defaultValues: { FirstName: "" }, mode: "onChange" });
 
  const onSubmit = (data:any) => console.log(data);
 
  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" />
            <input type="submit" />
        </form>
  );
}

