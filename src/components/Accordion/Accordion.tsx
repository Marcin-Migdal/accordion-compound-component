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
    const { activeItemKey, toggleOpenItem } = useAccordionContext();

    const childrenArray = React.Children.toArray(children);

    const accordionItemChildren = childrenArray.map((child) => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { ...child.props, itemKey, toggleOpenItem, openStatus: activeItemKey?.[itemKey] || "closed" });
        else return null;
    });

    return <div className={`accordion-wrapper-item ${activeItemKey?.[itemKey] || "closed"} ${className}`}>{accordionItemChildren}</div>;
};

export const AccordionTitle = ({ itemKey, children, className = "", toggleOpenItem }: IAccordionItemWrapperChildrenProps) => {
    const _itemKey = itemKey as ItemKeyType; // itemKey at this point can't be undefined, thats why i have to set is forcefully to ItemKeyType

    const handleClick = () => toggleOpenItem && toggleOpenItem(_itemKey);

    return (
        <div onClick={handleClick} className={`accordion-title ${className}`}>
            {children}
        </div>
    );
};

export const AccordionExpanded = ({ openStatus, children, className = "" }: IAccordionItemWrapperChildrenProps) => { 
    if (openStatus === "closed") return <></>;
    else return <div className={`accordion-expanded ${className}`}>{children}</div>;
};
