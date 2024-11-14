import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className="ErrorMessage">{message}</div>
);

export default ErrorMessage;
