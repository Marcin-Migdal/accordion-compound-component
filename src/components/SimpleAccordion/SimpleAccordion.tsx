import { Accordion, AccordionTitle, AccordionItemWrapper, AccordionExpanded } from "../Accordion/Accordion";
import { IDataSet } from "../../utils/interfaces";

export const SimpleAccordion = ({ dataSet }: { dataSet: IDataSet[] }) => (
    <Accordion>
        {dataSet.map((item) => (
            <AccordionItemWrapper key={item.id} itemKey={item.id}>
                <AccordionTitle>{item.title}</AccordionTitle>
                <AccordionExpanded>{item.detail}</AccordionExpanded>
            </AccordionItemWrapper>
        ))}
    </Accordion>
);
