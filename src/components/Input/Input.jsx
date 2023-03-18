import React from "react";
import '../base.css';
import './input.css';

const Input = ({ label, error, msg,  ...props}) => {
  return (
    <label className="inputContainer">
      {label}
      {error && <div className="error">{error}</div>}
      {error ? <input className="inputError" {...props}/> : <input {...props}/> }
      <span>{msg}</span>
    </label>
  );
};

export default Input;