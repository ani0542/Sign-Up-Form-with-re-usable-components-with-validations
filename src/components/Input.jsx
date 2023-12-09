import React from "react";

const Input = ({ type, placeholder, value, onChange, isValid }) => {
  const borderStyle = isValid ? {} : { border: "2px solid red" };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={borderStyle}
    />
  );
};

export default Input;
