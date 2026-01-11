import { TContainer } from "./Container.types";
import "./Container.css";

export const Container: TContainer = ({ children, ...divProps }) => (
  <div className="container" {...divProps}>
    {children}
  </div>
);
