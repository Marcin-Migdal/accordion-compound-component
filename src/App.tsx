import React from "react";

import { SideMenuAccordion } from "./components/examples/SideMenuAccordion/SideMenuAccordion";
import { CustomAccordion } from "./components/examples/CustomAccordion/CustomAccordion";
import { SimpleAccordion } from "./components/examples/SimpleAccordion/SimpleAccordion";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="row">
                <SimpleAccordion />
                <CustomAccordion />
                <SideMenuAccordion />
            </div>
        </div>
    );
};

export default App;
