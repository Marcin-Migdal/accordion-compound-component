import { createContext, ReactNode, useContext, useState } from "react";

import { ActiveItemKeyType } from "./interfaces";

export const AccordionContext = createContext<any>(null);

export const AccordionContextProvider = ({ children }: { children: ReactNode }) => {
    const [activeItemKey, setActiveItemKey] = useState<ActiveItemKeyType>(undefined);

    const toggleOpenItem = (itemKey: ActiveItemKeyType) => setActiveItemKey(activeItemKey === itemKey ? undefined : itemKey);

    return <AccordionContext.Provider value={{ activeItemKey, toggleOpenItem }}>{children}</AccordionContext.Provider>;
};

export const useAccordionContext = () => {
    const { activeItemKey, toggleOpenItem } = useContext(AccordionContext);

    return { activeItemKey, toggleOpenItem };
};
