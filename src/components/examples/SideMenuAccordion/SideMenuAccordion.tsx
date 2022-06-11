import { Accordion, AccordionItemWrapper } from "../../Accordion/Accordion";
import { SideMenuAccordionItem } from "./SideMenuAccordionItem";
import { userDataSet } from "../../../utils/dataSet";

import "./SideMenuAccordion.css";

// Example "side menu accordion"
export const SideMenuAccordion = () => (
    <div className="example-container right-click">
        <div className="example-header">
            <h3>Side menu accordion</h3> 
        </div>
        <Accordion>
            {userDataSet.map((item) => (
                <AccordionItemWrapper key={item.id} itemKey={item.id}>
                    <SideMenuAccordionItem item={item} />
                </AccordionItemWrapper>
            ))}
        </Accordion>
    </div>
);
