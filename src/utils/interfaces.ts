import { ChangeEvent } from "react";

export interface IDataSet {
    id: number;
    title: string;
    detail?: string;
}

export interface ExpandedContent {
    item: IDataSet;
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ITabsComponentProps {
    tabs: {
        [key: string]: any;
    };
}
