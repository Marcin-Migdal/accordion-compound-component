import React from "react";

import { MyList } from "./components/MyList/MyList";

import "./App.css";

interface IData {
    id: number;
    title: string;
    context: string;
}

const dataSet: IData[] = [
    { id: 1, title: "Title 1", context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu bibendum mauris." },
];

const App = () => {
    return (
        <div className="App">
            <MyList dataSet={dataSet} />
        </div>
    );
};

export default App;
