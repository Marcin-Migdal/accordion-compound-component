import { ReactNode } from "react";

export type OpenStatusKeyType = "opening" | "opened" | "closing" | "closed" | "closedVisible";
export type OpenStatusType = "opening" | "opened" | "closing" | "closed" | "closed-visible";

export type IStatuses = { [key in OpenStatusKeyType]: OpenStatusType };

export type ItemKeyType = number | string;

export type ActiveItemKeyType = ActiveItemKey | undefined;

export interface IContextProps {
    children: ReactNode;
    autoClose: boolean;
}

export interface IAccordionProps {
    children: ReactNode | ReactNode[];
    className?: string;
    autoClose?: boolean;
    type?: AccordionType;
}

export interface IItemWrapperProps extends IItemWrapperBaseProps {
    itemKey: ItemKeyType;
}
export interface IItemWrapperChildrenProps extends IItemWrapperBaseProps {
    toggleOpenItem?: Function;
    itemKey?: ItemKeyType;
    openStatus?: OpenStatusType;
}

interface IItemWrapperBaseProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

interface ActiveItemKey {
    [key: ItemKeyType]: OpenStatusType;
}

type AccordionType = "normal" | "side-menu";
