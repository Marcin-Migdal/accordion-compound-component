import { FaTwitter, FaFacebook, FaTwitch, FaGithub } from "react-icons/fa";

import { ItemContent, ItemExpandedContent, ItemWrapper } from "../../Accordion/ItemWrapper";
import { Accordion } from "../../Accordion/Accordion";
import { userDataSet } from "../../../utils/dataSet";

// Example "side menu accordion"
export const SideMenuAccordion = () => (
    <div className="example-container right-click">
        <div className="example-header">
            <h3>Side menu accordion</h3>
        </div>
        <Accordion autoClose type="side-menu">
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
    </div>
);
