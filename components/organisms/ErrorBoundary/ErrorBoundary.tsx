import React from "react";
import {
  TErrorBoundaryProps,
  TErrorBoundarayState,
} from "./ErrorBoundary.types";

export class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  TErrorBoundarayState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (this.props.handleComponentDidCatch)
      this.props.handleComponentDidCatch(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
