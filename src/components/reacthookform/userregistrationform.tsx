import React from "react";

import { useForm } from "react-hook-form";
 
const UserRegisterFormComponent = () => {

  const {

    register,

    handleSubmit,

    formState: { errors },

  } = useForm();
 
  const handleRegistration = (data:any) => console.log(data);
 
  const registerOptions = {

    name: { required: "Name is required" },

    email: { required: "Email is required" },

    password: {

      required: "Password is required",

      minLength: { value: 8, message: "Password must have at least 8 characters" },

    },

  };
 
  return (
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div className="form-group">
                    <label>Name</label>
                    <input {...register("name", registerOptions.name)}  className={`form-control ${errors.name ? "is-invalid" : ""}`} />
                    <small className="text-danger">{errors.name?.message as string}</small>
                </div>
            
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" {...register("email", registerOptions.email)} className={`form-control ${errors.email ? "is-invalid" : ""}`} />
                    <small className="text-danger">{errors.email?.message as string}</small>
                </div>
            
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" {...register("password", registerOptions.password)} className={`form-control ${errors.password ? "is-invalid" : ""}`} />
                    <small className="text-danger">{errors.password?.message as string}</small>
                </div>
            
                <button className="btn btn-primary">Submit</button>
            </form>

  );

};
 
export default UserRegisterFormComponent;

 