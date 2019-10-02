import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="ui button" type="submit" style={{ margin: "5px" }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
