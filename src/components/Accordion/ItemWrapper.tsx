import React from "react";

import { IItemWrapperProps, IItemWrapperChildrenProps } from "./interfaces/interfaces";
import { useAccordionContext } from "./context/AccordionContext";

export const ItemWrapper = ({ children, itemKey, className = "" }: IItemWrapperProps) => {
    const { activeItemKey, toggleOpenItem } = useAccordionContext();

    const childrenArray = React.Children.toArray(children);

    const accordionItemChildren = childrenArray.map((child) => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { ...child.props, itemKey, toggleOpenItem, openStatus: activeItemKey?.[itemKey] || "closed" });
        else return null;
    });

    return <div className={`item-wrapper ${activeItemKey?.[itemKey] || "closed"} ${className}`}>{accordionItemChildren}</div>;
};

export const ItemContent = ({ children, itemKey, toggleOpenItem, className = "" }: IItemWrapperChildrenProps) => {
    const handleClick = (e: any) => toggleOpenItem && itemKey && toggleOpenItem(itemKey);

    return (
        <div onClick={handleClick} className={`item-content ${className}`}>
            {children}
        </div>
    );
};

export const ItemExpandedContent = ({ children, openStatus, className = "" }: IItemWrapperChildrenProps) => {
    if (openStatus === "closed") return <></>;
    else return <div className={`item-expanded-content ${className}`}>{children}</div>;
};
