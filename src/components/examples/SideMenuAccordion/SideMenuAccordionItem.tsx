import { FaTwitter, FaFacebook, FaTwitch, FaGithub } from "react-icons/fa";

import { useState } from "react";
import { IDataSet } from "../../../utils/interfaces";

interface IAccordionItem {
    item: IDataSet;
}

//TODO! this component have to use accordion build in toggleOpenItem function for side menu open/close state
//TODO! <div className="side-menu"> part will not be rendered when openStatus will be 'closed'
export const SideMenuAccordionItem = ({ item }: IAccordionItem) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <div className={`custom-accordion-title ${open ? "opened" : "closed"}`}>
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
