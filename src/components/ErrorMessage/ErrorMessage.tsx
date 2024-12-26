import React, { FC } from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.errorMessage}>{message}</div>
);

export default ErrorMessage;
