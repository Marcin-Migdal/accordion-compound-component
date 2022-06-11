import { ReactNode } from "react";

export type OpenStatusKeyType = "opening" | "opened" | "closing" | "closed" | "closedVisible";
export type OpenStatusType = "opening" | "opened" | "closing" | "closed" | "closed-visible";

export type IStatuses = { [key in OpenStatusKeyType]: OpenStatusType };

export type ItemKeyType = number | string;
interface ActiveItemKey {
    [key: ItemKeyType]: OpenStatusType;
}

export type ActiveItemKeyType = ActiveItemKey | undefined;

export interface IAccordionProps {
    children: ReactNode | ReactNode[];
    className?: string;
    autoClose?: boolean;
}

export interface IAccordionItemWrapperProps extends IAccordionItemBaseProps {
    itemKey: ItemKeyType;
}
export interface IAccordionItemWrapperChildrenProps extends IAccordionItemBaseProps {
    toggleOpenItem?: Function;
    itemKey?: ItemKeyType;
    openStatus?: OpenStatusType;
    disabledToggle?: boolean;
}

interface IAccordionItemBaseProps {
    children: ReactNode | ReactNode[];
    className?: string;
}
