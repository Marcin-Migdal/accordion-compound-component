import React from "react";

import { SimpleAccordion } from "./components/SimpleAccordion/SimpleAccordion";
import { CustomAccordion } from "./components/CustomAccordion/CustomAccordion";
import { dataSet } from "./utils/dataSet";

import "./App.css";

// TODO! Add functionality for opening -> opened -> closing -> closed logic
// TODO! fix scroll visibility to only be displayed when "opened"
// TODO! Add right click accordion example

const App = () => {
    return (
        <div className="App">
            <div className="row">
                <div className="col">
                    <h3>Simple accordion</h3>
                    <SimpleAccordion dataSet={dataSet} />
                </div>
                <div className="col">
                    <h3>Custom accordion</h3>
                    <CustomAccordion dataSet={dataSet} />
                </div>
                {/* <div className="col">
                    <h3>Right click accordion</h3>
                    <SimpleAccordion dataSet={dataSet} />
                </div> */}
            </div>
        </div>
    );
};

export default App;
