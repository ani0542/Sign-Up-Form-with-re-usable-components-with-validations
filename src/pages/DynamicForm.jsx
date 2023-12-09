import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const DynamicForm = ({ fields, onSubmit }) => {
  const initialFormData = Object.fromEntries(
    fields.map((field) => [field.name, ""])
  );
  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(
    Object.fromEntries(fields.map((field) => [field.name, true]))
  );

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleValidation = () => {
    const validation = {};
    fields.forEach((field) => {
      validation[field.name] = field.validation
        ? field.validation(formData[field.name])
        : true;
    });
    setIsValid(validation);
    return Object.values(validation).every((valid) => valid);
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      onSubmit(formData);
    }
  };

  return (
    <div>
      {fields.map((field) => (
        <Input
          key={field.name}
          type={field.type || "text"}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          isValid={isValid[field.name]}
        />
      ))}
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default DynamicForm;
