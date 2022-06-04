import { ReactNode } from "react";

export type ItemKeyType = number | string;
export type ActiveItemKeyType = ItemKeyType | undefined;

export interface IAccordionProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export interface IAccordionChildrenProps {
    children: ReactNode | ReactNode[];
    itemKey?: ItemKeyType;
    className?: string;
}
