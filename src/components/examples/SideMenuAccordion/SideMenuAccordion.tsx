import { FaTwitter, FaFacebook, FaTwitch, FaGithub } from "react-icons/fa";

import {
    SideMenuItemExpandedContent,
    SideMenuItemContent,
    SideMenuItemWrapper,
} from "../../Accordion/ItemWrappers/SideMenuItemWrapper/SideMenuItemWrapper";
import { Accordion } from "../../Accordion/Accordion";
import { userDataSet } from "../../../utils/dataSet";

// Example "side menu accordion"
export const SideMenuAccordion = () => (
    <div className="example-container right-click">
        <div className="example-header">
            <h3>Side menu accordion</h3>
        </div>
        <Accordion>
            {userDataSet.map((item) => (
                <SideMenuItemWrapper key={item.id} itemKey={item.id}>
                    <SideMenuItemContent> {item.title}</SideMenuItemContent>
                    <SideMenuItemExpandedContent>
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
                    </SideMenuItemExpandedContent>
                </SideMenuItemWrapper>
            ))}
        </Accordion>
    </div>
);
