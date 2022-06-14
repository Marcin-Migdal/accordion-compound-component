import { SideMenuAccordion } from "./components/examples/SideMenuAccordion/SideMenuAccordion";
import { CustomAccordion } from "./components/examples/CustomAccordion/CustomAccordion";
import { SimpleAccordion } from "./components/examples/SimpleAccordion/SimpleAccordion";
import { TabsComponent } from "./components/TabsComponent/TabsComponent";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="center-tabs">
                <TabsComponent
                    tabs={{
                        Simple: <SimpleAccordion />,
                        Custom: <CustomAccordion />,
                        "Side menu": <SideMenuAccordion />,
                    }}
                />
            </div>
        </div>
    );
};

export default App;
