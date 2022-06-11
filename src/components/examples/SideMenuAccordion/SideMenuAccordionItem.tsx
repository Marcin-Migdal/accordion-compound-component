import { FaTwitter, FaFacebook, FaTwitch, FaGithub } from "react-icons/fa";

import { OpenStatusType, ItemKeyType } from "../../Accordion/interfaces";
import { IDataSet } from "../../../utils/interfaces";

interface IAccordionItem {
    item: IDataSet;
    toggleOpenItem?: Function;
    openStatus?: OpenStatusType;
    itemKey?: ItemKeyType;
}

export const SideMenuAccordionItem = ({ item, toggleOpenItem, openStatus, itemKey }: IAccordionItem) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        toggleOpenItem && itemKey && toggleOpenItem(itemKey);
    };

    return (
        <div className={`custom-accordion-title`}>
            <div className="side-menu">
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
            </div>
            <div onContextMenu={handleClick} className="custom-accordion-title-content no-select">
                {item.title}
            </div>
        </div>
    );
};
