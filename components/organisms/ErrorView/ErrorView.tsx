import { TErrorView } from "./ErrorView.types";

export const ErrorView: TErrorView = ({ errorMessage }) => {
  const renderedErrorMessage = errorMessage || "Please try again later.";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p>{renderedErrorMessage}</p>
    </div>
  );
};
