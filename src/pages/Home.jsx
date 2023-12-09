import React, { useState } from "react";
import Input from "../components/Input";


export const Home = () => {
  const [formData, setFormData] = useState({
    text: "",
    email: "",
    number: "",
    // Add more fields as needed
  });

  // const inputConfig = {
  //   text: { type: "text", placeholder: "Enter text" },
  //   email: { type: "email", placeholder: "Enter email" },
  //   number: { type: "number", placeholder: "Enter number" },
  //   // Add more configurations as needed
  // };


  // const inputStyle = {
  //   // Add your desired styles here
  //   margin: "5px",
  //   padding: "10px",
  //   borderRadius: "5px",
  //   // Add more styles as needed
  // };


  const inputConfig = {
    text: {
      type: "text",
      placeholder: "Enter text",
      style: { marginBottom: "10px", border: "1px solid #ccc", padding: "8px" },
    },
    email: {
      type: "email",
      placeholder: "Enter email",
      style: { marginBottom: "10px", border: "1px solid #ccc", padding: "8px" },
    },
    number: {
      type: "number",
      placeholder: "Enter number",
      style: { marginBottom: "10px", border: "1px solid #ccc", padding: "8px" },
    },
    // Add more configurations as needed
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div>
      {Object.keys(formData).map((field) => (
        <Input
          key={field}
          type={inputConfig[field]?.type}
          placeholder={inputConfig[field]?.placeholder}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          // style={inputStyle}
          style={inputConfig[field]?.style}
        />
      ))}

      {/* <div>
        <Input
          type={inputConfig.text.type}
          placeholder={inputConfig.text.placeholder}
          value={formData.text}
          onChange={(e) => handleInputChange("text", e.target.value)}
        />
      </div>
      <div>
        <Input
          type={inputConfig.email.type}
          placeholder={inputConfig.email.placeholder}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      <div>
        <Input
          type={inputConfig.number.type}
          placeholder={inputConfig.number.placeholder}
          value={formData.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
        />
      </div> */}
    </div>
  );
};
