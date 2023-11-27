import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
const schema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  department: yup.string().required("Department is not mentioned"),
  role: yup.string().required("Role is not mentioned"),
});
function Form() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      department: "",
      role: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const submitHandler = async(data) => {
    console.log("data get submit",data);
    console.log(`${process.env.REACT_APP_BASE_URL}/createEmployee`)
    let result = await fetch(
        'http://localhost:4000/api/v1/createEmployee', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data}),
        }
    ).then(data=>{
      console.log(data)
    })
    .catch(error=>{
      console.log(error)
    })
    console.log(result)
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label for="name">
            Employee Name
            <br />
            <input
              placeholder="Enter your full name"
              type="text"
              id="name"
              {...register("name")}
            />
            <br />
            <p>{errors.name?.message}</p>
          </label>
        </div>
        <div>
          <label for="email">
            Employee Email Id
            <br />
            <input
              placeholder="Enter your email id"
              type="email"
              id="email"
              {...register("email")}
            />
            <br />
            <p>{errors.email?.message}</p>
          </label>
        </div>
        <div>
          <label for="department">
            Employee department
            <br />
            <input
              placeholder="Enter your department"
              type="text"
              id="department"
              {...register("department")}
            />
            <br />
            <p>{errors.department?.message}</p>
          </label>
        </div>
        <div>
          <label for="role">
            Employee role
            <br />
            <input
              placeholder="Enter your role"
              type="text"
              id="role"
              {...register("role")}
            />
            <br />
            <p>{errors.role?.message}</p>
          </label>
        </div>
        <button type="submit"> Create Employee {`->`}</button>
      </form>
      <button ><NavLink to='/list'>See the list</NavLink></button>
    </div>
  );
}

export default Form;
