import React from "react";
const Button = ({ event, text }) => {
  return <button onClick={event}>{text}</button>;
};

export default Button;
