import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

import { Accordion, AccordionExpanded, AccordionItemWrapper, AccordionTitle } from "../Accordion/Accordion";
import { IDataSet } from "../../utils/interfaces";

import "./CustomAccordion.css";

// Example "custom accordion"
export const CustomAccordion = ({ dataSet }: { dataSet: IDataSet[] }) => {
    const [customDataSet, setCustomDataSet] = useState<IDataSet[]>(dataSet);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        const _customDataSet = customDataSet.map((item) => ({ ...item, detail: item.id === parseInt(name) ? value : item.detail }));
        setCustomDataSet(_customDataSet);
    };

    return (
        <Accordion>
            {customDataSet.map((item) => (
                <AccordionItemWrapper key={item.id} itemKey={item.id}>
                    <AccordionTitle className="custom-accordion-title no-select">
                        <FontAwesomeIcon className="indicator-icon" icon={faAngleDown} />
                        {item.title}
                    </AccordionTitle>
                    <AccordionExpanded className="custom-accordion-expanded">
                        <textarea
                            spellCheck="false"
                            id={`accordion-textarea-${item.id}`}
                            className="accordion-textarea"
                            name={item.id.toString()}
                            onChange={handleChange}
                            value={item.detail}
                        />
                    </AccordionExpanded>
                </AccordionItemWrapper>
            ))}
        </Accordion>
    );
};
