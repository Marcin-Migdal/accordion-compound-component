import React from "react";

import { IAccordionItemWrapperProps, IAccordionItemWrapperChildrenProps, IAccordionProps, ItemKeyType } from "./interfaces";
import { AccordionContextProvider, useAccordionContext } from "./AccordionContext";

import "./Accordion.css";

export const Accordion = ({ children, autoClose = false, className = "" }: IAccordionProps) => (
    <AccordionContextProvider autoClose={autoClose}>
        <div className={`accordion ${className}`}>{children}</div>
    </AccordionContextProvider>
);

export const AccordionItemWrapper = ({ children, itemKey, className = "" }: IAccordionItemWrapperProps) => {
    const { activeItemKey } = useAccordionContext();

    const childrenArray = React.Children.toArray(children);

    const accordionItemChildren = childrenArray.map((child) => {
        if (React.isValidElement(child)) return React.cloneElement(child, { ...child.props, itemKey });
        else return null;
    });

    return <div className={`accordion-wrapper-item ${activeItemKey?.[itemKey] || "closed"} ${className}`}>{accordionItemChildren}</div>;
};

export const AccordionTitle = ({ itemKey, children, className = "" }: IAccordionItemWrapperChildrenProps) => {
    const _itemKey = itemKey as ItemKeyType; // itemKey at this point can't be undefined, thats why i have to set is forcefully to ItemKeyType
    const { toggleOpenItem } = useAccordionContext();

    return (
        <div onClick={() => toggleOpenItem(_itemKey)} className={`accordion-title ${className}`}>
            {children}
        </div>
    );
};

export const AccordionExpanded = ({ itemKey, children, className = "" }: IAccordionItemWrapperChildrenProps) => {
    const _itemKey = itemKey as ItemKeyType; // itemKey at this point can't be undefined, thats why i have to set is forcefully to ItemKeyType
    const { activeItemKey } = useAccordionContext();

    if ((activeItemKey?.[_itemKey] || "closed") === "closed") return <></>;
    return <div className={`accordion-expanded ${className}`}>{children}</div>;
};
