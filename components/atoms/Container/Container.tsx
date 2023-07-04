import { TContainer } from "./Container.types";

export const Container: TContainer = ({ children, ...divProps }) => (
  <div className="container mx-auto" {...divProps}>
    {children}
  </div>
);
