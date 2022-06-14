import { FocusEvent, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

import { ItemWrapper, ItemExpandedContent, ItemContent } from "../../Accordion/ItemWrapper";
import { Accordion } from "../../Accordion/Accordion";
import { IDataSet } from "../../../utils/interfaces";

import "./CustomAccordion.css";
import { AutoCloseInput } from "../../AutoCloseInput/AutoCloseInput";

// Example "custom accordion"
export const CustomAccordion = () => {
    const [dataSetLength, setDataSetLength] = useState<number>(10);
    const [customDataSet, setCustomDataSet] = useState<IDataSet[]>([]);
    const [autoCloseOn, setAutoCloseOn] = useState<boolean>(false);

    const handleClick = () => setAutoCloseOn((prev) => !prev);

    const handleChange = (e: FocusEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        const _customDataSet = customDataSet.map((item) => ({ ...item, detail: item.id === parseInt(name) ? value : item.detail }));
        setCustomDataSet(_customDataSet);
    };

    const getArray = (dataSetLength: number): void => {
        let array = [];

        for (let i = 0; i < dataSetLength; i++) {
            array.push({
                id: i + 1,
                title: "Title 1",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec orci sed lacus bibendum",
            });
        }

        setCustomDataSet(array);
    };

    useEffect(() => {
        getArray(dataSetLength);
    }, [dataSetLength]);

    return (
        <>
            <div className="example-header custom">
                <h3 className="no-select">Custom accordion</h3>
                <div className="input-container">
                    <input type="number" value={dataSetLength} onChange={(e) => setDataSetLength(parseInt(e.target.value))} />
                    <AutoCloseInput value={autoCloseOn} onClick={handleClick} />
                </div>
            </div>
            <div className="accordion-container">
                <Accordion autoClose>
                    {customDataSet.map((item) => (
                        <ItemWrapper key={item.id} itemKey={item.id}>
                            <ItemContent className="no-select">
                                <FaAngleUp className="indicator-icon" />
                                {item.title}
                            </ItemContent>
                            <ItemExpandedContent className="custom-item-expanded-content">
                                <ExpandedContent item={item} handleChange={handleChange} />
                            </ItemExpandedContent>
                        </ItemWrapper>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

const ExpandedContent = ({ item, handleChange }: any) => {
    const [value, setValue] = useState(item.detail);

    return (
        <textarea
            spellCheck="false"
            id={`accordion-textarea-${item.id}`}
            className="accordion-textarea"
            name={item.id.toString()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleChange}
        />
    );
};
