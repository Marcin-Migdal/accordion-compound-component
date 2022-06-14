import { FaTwitter, FaFacebook, FaTwitch, FaGithub } from "react-icons/fa";
import { useState } from "react";

import { ItemContent, ItemExpandedContent, ItemWrapper } from "../../Accordion/ItemWrapper";
import { AutoCloseInput } from "../../AutoCloseInput/AutoCloseInput";
import { Accordion } from "../../Accordion/Accordion";
import { userDataSet } from "../../../utils/dataSet";

// Example "side menu accordion"
export const SideMenuAccordion = () => {
    const [autoCloseOn, setAutoCloseOn] = useState<boolean>(false);

    const handleClick = () => setAutoCloseOn((prev) => !prev);

    return (
        <>
            <div className="example-header">
                <h3 className="no-select">Side menu accordion</h3>
                <AutoCloseInput value={autoCloseOn} onClick={handleClick} />
            </div>
            <Accordion autoClose={autoCloseOn} type="side-menu">
                {userDataSet.map((item) => (
                    <ItemWrapper key={item.id} itemKey={item.id}>
                        <ItemContent> {item.title}</ItemContent>
                        <ItemExpandedContent>
                            <div className="icon-container">
                                <FaTwitter className="icon" />
                            </div>
                            <div className="icon-container">
                                <FaFacebook className="icon" />
                            </div>
                            <div className="icon-container">
                                <FaTwitch className="icon" />
                            </div>
                            <div className="icon-container">
                                <FaGithub className="icon" />
                            </div>
                        </ItemExpandedContent>
                    </ItemWrapper>
                ))}
            </Accordion>
        </>
    );
};
