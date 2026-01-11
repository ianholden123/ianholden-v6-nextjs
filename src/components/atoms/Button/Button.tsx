import { TButton } from "./Button.types";
import "./Button.css";

export const Button: TButton = ({ children, className = "", ...buttonProps }) => {
  return (
    <button className={`btn ${className}`.trim()} {...buttonProps}>
      {children}
    </button>
  );
};
