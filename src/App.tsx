import React from "react";

import { SideMenuAccordion } from "./components/examples/SideMenuAccordion/SideMenuAccordion";
import { CustomAccordion } from "./components/examples/CustomAccordion/CustomAccordion";
import { SimpleAccordion } from "./components/examples/SimpleAccordion/SimpleAccordion";

import "./App.css";

//! TODO
//! 2) Next I need to make some nice home page for better viewing experience:
//!    - there will be a tab for each accordion example
//!    - each accordion will have radio button that will enable or disabled autoclose
//!    - There still will be only three/(maybe four) examples:
//!        - Simple example
//!        - Custom example (textarea in expanded context)
//!        - Side menu example
//!        - example that will use dispatch for crude operation (not sure if i will make it in this project)

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
