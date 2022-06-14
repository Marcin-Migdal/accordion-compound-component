import { useState } from "react";

import { ItemWrapper, ItemExpandedContent, ItemContent } from "../../Accordion/ItemWrapper";
import { AutoCloseInput } from "../../AutoCloseInput/AutoCloseInput";
import { Accordion } from "../../Accordion/Accordion";
import { dataSet } from "../../../utils/dataSet";

// Example "simple accordion"
export const SimpleAccordion = () => {
    const [autoCloseOn, setAutoCloseOn] = useState<boolean>(false);

    const handleClick = () => setAutoCloseOn((prev) => !prev);

    return (
        <>
            <div className="example-header">
                <h3 className="no-select">Simple accordion</h3>
                <AutoCloseInput value={autoCloseOn} onClick={handleClick} />
            </div>
            <div className="accordion-container">
                <Accordion autoClose={autoCloseOn}>
                    {dataSet.map((item) => (
                        <ItemWrapper key={item.id} itemKey={item.id}>
                            <ItemContent className="no-select">{item.title}</ItemContent>
                            <ItemExpandedContent>{item.detail}</ItemExpandedContent>
                        </ItemWrapper>
                    ))}
                </Accordion>
            </div>
        </>
    );
};
