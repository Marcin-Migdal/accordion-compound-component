import { useEffect, useState } from "react";

import { ITabsComponentProps } from "../../utils/interfaces";

import "./TabsComponent.css";

export const TabsComponent = ({ tabs }: ITabsComponentProps) => {
    const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined);
    const [tabOptions, setTabOptions] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        const tabsKeys = Object.keys(tabs);

        setSelectedTab(tabsKeys[0]);
        setTabOptions(tabsKeys);
    }, []);

    if (!selectedTab || !tabOptions) return <></>;

    return (
        <div className="tabs-container">
            <ul>
                {tabOptions.map((tab) => (
                    <li className={`${selectedTab === tab ? "selected" : ""} no-select`} onClick={() => setSelectedTab(tab)}>
                        {tab}
                    </li>
                ))}
            </ul>
            <div className="tab-content">{tabs[selectedTab]}</div>
        </div>
    );
};
