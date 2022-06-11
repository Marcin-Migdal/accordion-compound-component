import { Accordion, AccordionTitle, AccordionItemWrapper, AccordionExpanded } from "../../Accordion/Accordion";
import { IDataSet } from "../../../utils/interfaces";
import { dataSet } from "../../../utils/dataSet";

// Example "simple accordion"
export const SimpleAccordion = () => (
    <div className="example-container">
        <div className="example-header">
            <h3>Simple accordion</h3>
        </div>
        <div className="col">
            <Accordion>
                {dataSet.map((item) => (
                    <AccordionItemWrapper key={item.id} itemKey={item.id}>
                        <AccordionTitle className="no-select">{item.title}</AccordionTitle>
                        <AccordionExpanded>{item.detail}</AccordionExpanded>
                    </AccordionItemWrapper>
                ))}
            </Accordion>
        </div>
    </div>
);
