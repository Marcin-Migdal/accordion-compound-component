import React from "react";

import { SimpleAccordion } from "./components/SimpleAccordion/SimpleAccordion";
import { dataSet } from "./utils/dataSet";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="row">
                <div className="col">
                    <h3>Simple accordion</h3>
                    <SimpleAccordion dataSet={dataSet} />
                </div>
                <div className="col">
                    <h3>Simple accordion</h3>
                    <SimpleAccordion dataSet={dataSet} />
                </div>
                <div className="col">
                    <h3>Simple accordion</h3>
                    <SimpleAccordion dataSet={dataSet} />
                </div>
            </div>
        </div>
    );
};

export default App;
