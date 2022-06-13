import { ItemWrapper, ItemExpandedContent, ItemContent } from "../../Accordion/ItemWrapper";
import { Accordion } from "../../Accordion/Accordion";
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
                    <ItemWrapper key={item.id} itemKey={item.id}>
                        <ItemContent className="no-select">{item.title}</ItemContent>
                        <ItemExpandedContent>{item.detail}</ItemExpandedContent>
                    </ItemWrapper>
                ))}
            </Accordion>
        </div>
    </div>
);
