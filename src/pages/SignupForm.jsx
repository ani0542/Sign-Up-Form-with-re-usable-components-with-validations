import React from "react";
import DynamicForm from "./DynamicForm";

const SignupForm = () => {
  const fields = [
    {
      name: "username",
      placeholder: "Username",
      validation: (value) => value.trim() !== "",
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      validation: (value) => value.trim() !== "",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      validation: (value) => value.trim() !== "",
    },
    // Add more fields as needed
  ];

  const handleSubmit = (formData) => {
    // Perform signup logic here
    console.log("Signup successful!", formData);
  };

  return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
};

export default SignupForm;
