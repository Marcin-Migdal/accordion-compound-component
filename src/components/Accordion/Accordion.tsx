import React, { useCallback } from "react";

import { AccordionContextProvider, useAccordionContext } from "./AccordionContext";
import { IAccordionChildrenProps, IAccordionProps } from "./interfaces";

import "./Accordion.css";

export const Accordion = ({ children, className = "" }: IAccordionProps) => (
    <AccordionContextProvider>
        <div className={`accordion ${className}`}>{children}</div>
    </AccordionContextProvider>
);

export const AccordionItemWrapper = ({ children, itemKey, className }: IAccordionChildrenProps) => {
    const { activeItemKey } = useAccordionContext();

    const childrenArray = React.Children.toArray(children);

    const accordionItemChildren = childrenArray.map((child) => {
        if (React.isValidElement(child)) return React.cloneElement(child, { ...child.props, itemKey });
        else return null;
    });

    return (
        <div className={`accordion-wrapper ${activeItemKey === itemKey ? "expanded" : "collapsed"} ${className}`}>
            {accordionItemChildren}
        </div>
    );
};

export const AccordionTitle = ({ itemKey, children, className = "" }: IAccordionChildrenProps) => {
    const { toggleOpenItem } = useAccordionContext();

    const accordionButtonClickHandler = useCallback(() => {
        toggleOpenItem(itemKey);
    }, [toggleOpenItem, itemKey]);

    return (
        <div onClick={accordionButtonClickHandler} className={`accordion-button ${className}`}>
            {children}
        </div>
    );
};

export const AccordionExpanded = ({ children, className = "" }: IAccordionChildrenProps) => {
    return <div className={`accordion-panel ${className}`}>{children}</div>;
};
