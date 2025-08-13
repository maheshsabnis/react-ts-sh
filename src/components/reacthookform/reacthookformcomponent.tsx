import React from 'react';  
import { useForm } from 'react-hook-form';
/*
✅ Key Features
Minimal re-renders: Uses refs instead of state.

Built-in validation: Supports HTML validation rules and custom logic.

Schema validation: Integrates with libraries like Yup, Zod, and Joi.

UI library support: Works well with Material UI, Ant Design, etc.

*/

const ReactHookFormComponent=()=>{
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="First Name" />
      {errors.firstName && <p>First name is required</p>}

      <input {...register("age", { pattern: /\d+/ })} placeholder="Age" />
      {errors.age && <p>Please enter a valid number</p>}

      <input type="submit" />
    </form>
  );
}

export default ReactHookFormComponent;