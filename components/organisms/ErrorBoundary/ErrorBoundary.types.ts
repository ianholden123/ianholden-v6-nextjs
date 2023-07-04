export type TErrorBoundaryProps = {
  children: JSX.Element;
  handleComponentDidCatch?: (error: Error, errorInfo: React.ErrorInfo) => void;
  fallback: JSX.Element;
};

export type TErrorBoundarayState = {
  hasError: boolean;
};
