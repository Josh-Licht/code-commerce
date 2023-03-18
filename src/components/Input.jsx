import React from "react";

const Input = ({ label,  ...props}) => {
  return (
    <label>
      {label}
      <input {...props}/>
    </label>
  );
};

export default Input;