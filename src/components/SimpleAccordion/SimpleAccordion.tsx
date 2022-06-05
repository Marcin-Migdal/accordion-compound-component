import { Accordion, AccordionTitle, AccordionItemWrapper, AccordionExpanded } from "../Accordion/Accordion";
import { IDataSet } from "../../utils/interfaces";

// Example "simple accordion"
export const SimpleAccordion = ({ dataSet }: { dataSet: IDataSet[] }) => (
    <Accordion>
        {dataSet.map((item) => (
            <AccordionItemWrapper key={item.id} itemKey={item.id}>
                <AccordionTitle className="no-select">{item.title}</AccordionTitle>
                <AccordionExpanded>{item.detail}</AccordionExpanded>
            </AccordionItemWrapper>
        ))}
    </Accordion>
);
