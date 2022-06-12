import React from "react";

import { IItemWrapperChildrenProps, IItemWrapperProps } from "../../interfaces/interfaces";
import { useAccordionContext } from "../../context/AccordionContext";

import "./SideMenuItemWrapper.css";

export const SideMenuItemWrapper = ({ children, itemKey, className = "" }: IItemWrapperProps) => {
    const { activeItemKey, toggleOpenItem } = useAccordionContext();

    const childrenArray = React.Children.toArray(children);

    const accordionItemChildren = childrenArray.map((child) => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { ...child.props, itemKey, toggleOpenItem, openStatus: activeItemKey?.[itemKey] || "closed" });
        else return null;
    });

    return <div className={`side-menu-item-wrapper ${activeItemKey?.[itemKey] || "closed"} ${className}`}>{accordionItemChildren}</div>;
};

export const SideMenuItemContent = ({ itemKey, children, className = "", toggleOpenItem }: IItemWrapperChildrenProps) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        toggleOpenItem && itemKey && toggleOpenItem(itemKey);
    };

    return (
        <div onContextMenu={handleClick} className={`side-menu-item-content no-select ${className}`}>
            {children}
        </div>
    );
};

export const SideMenuItemExpandedContent = ({ children, className = "" }: IItemWrapperChildrenProps) => (
    <div className={`side-menu-item-expanded-content ${className}`}>{children}</div>
);
