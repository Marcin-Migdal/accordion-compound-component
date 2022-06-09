import React from "react";

import { CustomAccordion } from "./components/CustomAccordion/CustomAccordion";
import { SimpleAccordion } from "./components/SimpleAccordion/SimpleAccordion";
import { dataSet } from "./utils/dataSet";

import "./App.css";

// TODO! Add right click accordion example

const App = () => {
    return (
        <div className="App">
            <div className="row">
                <SimpleAccordion dataSet={dataSet} />
                <CustomAccordion />
                {/*  <h3>Right click accordion</h3>
                <SimpleAccordion dataSet={dataSet} /> */}
            </div>
        </div>
    );
};

export default App;
