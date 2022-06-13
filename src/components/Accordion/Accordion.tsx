import { AccordionContextProvider } from "./context/AccordionContext";
import { IAccordionProps } from "./interfaces/interfaces";

import "./styles/SideMenuItemWrapper.css";
import "./styles/ItemWrapper.css";
import "./styles/Accordion.css";

export const Accordion = ({ children, autoClose = false, type = "normal", className = "" }: IAccordionProps) => (
    <AccordionContextProvider autoClose={autoClose}>
        <div className={`accordion ${type} ${className}`}>{children}</div>
    </AccordionContextProvider>
);
