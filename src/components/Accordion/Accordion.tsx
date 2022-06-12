import { AccordionContextProvider } from "./context/AccordionContext";
import { IAccordionProps } from "./interfaces/interfaces";

import "./Accordion.css";

export const Accordion = ({ children, autoClose = false, className = "" }: IAccordionProps) => (
    <AccordionContextProvider autoClose={autoClose}>
        <div className={`accordion ${className}`}>{children}</div>
    </AccordionContextProvider>
);
