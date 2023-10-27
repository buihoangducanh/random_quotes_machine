import React from "react";
import "./Container.scss";
const Container = ({ className, children, style }) => {
  return (
    <div style={style} className={`container ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
