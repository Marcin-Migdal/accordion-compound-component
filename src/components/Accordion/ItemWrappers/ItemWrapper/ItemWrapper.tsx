import React from "react";

import { IItemWrapperProps, IItemWrapperChildrenProps, ItemKeyType } from "../../interfaces/interfaces";
import { useAccordionContext } from "../../context/AccordionContext";

import "./ItemWrapper.css";

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

export const ItemContent = ({ itemKey, children, className = "", toggleOpenItem }: IItemWrapperChildrenProps) => {
    const _itemKey = itemKey as ItemKeyType; // itemKey at this point can't be undefined, thats why i have to set is forcefully to ItemKeyType

    const handleClick = () => toggleOpenItem && toggleOpenItem(_itemKey);

    return (
        <div onClick={handleClick} className={`item-content ${className}`}>
            {children}
        </div>
    );
};

export const ItemExpandedContent = ({ openStatus, children, className = "" }: IItemWrapperChildrenProps) => {
    if (openStatus === "closed") return <></>;
    else return <div className={`item-expanded-content ${className}`}>{children}</div>;
};
