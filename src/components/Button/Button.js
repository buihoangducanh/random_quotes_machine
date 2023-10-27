import React from "react";
import "./Button.scss";

const Button = ({ className, children, style, onClick }) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={`my-button ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Button;
