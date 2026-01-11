import { PropsWithChildren } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type TButtonProps = PropsWithChildren<ButtonProps>;

export type TButton = (props: TButtonProps) => JSX.Element;
