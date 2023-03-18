import React from "react";
import '../base.css';
import './input.css';

const Input = ({ label, error, msg, icon, ...props}) => {
  return (
    <label className="inputContainer">
      {label}
      {error && <div className="error">{error}</div>}
      <input className={error ? 'inputError' : ''} {...props}/>
      {msg ? icon : null}
      <span>{msg}</span>
    </label>
  );
};

export default Input;