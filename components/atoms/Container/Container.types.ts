import { PropsWithChildren } from "react";

type DivProps = React.HTMLProps<HTMLDivElement>;

type TContainerProps = PropsWithChildren<DivProps>;

export type TContainer = (props: TContainerProps) => JSX.Element;
