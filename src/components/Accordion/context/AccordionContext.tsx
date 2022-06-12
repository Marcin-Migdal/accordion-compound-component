import { createContext, ReactNode, useContext, useState } from "react";

import { ItemKeyType, IStatuses, ActiveItemKeyType } from "../interfaces/interfaces";

export const AccordionContext = createContext<any>(null);

const statuses: IStatuses = {
    closed: "closed",
    closedVisible: "closed-visible",
    opening: "opening",
    opened: "opened",
    closing: "closing",
};

export const AccordionContextProvider = ({ children, autoClose }: { children: ReactNode; autoClose: boolean }) => {
    const [activeItemKey, setActiveItemKey] = useState<ActiveItemKeyType>(undefined);
    const [disabledToggle, setDisabledToggle] = useState<boolean>(false);

    const handleTimeOut = (setState: Function) =>
        setTimeout(() => {
            setState();
            setDisabledToggle(false);
        }, 340);

    const toggleOpenItem = (itemKey: ItemKeyType) => {
        if (disabledToggle) return;
        else setDisabledToggle(true);

        if (!autoClose) {
            if (activeItemKey?.[itemKey] === statuses.opened) {
                setActiveItemKey({ ...activeItemKey, [itemKey]: statuses.closing });
                handleTimeOut(() => {
                    setActiveItemKey((prevActiveItemKey) => {
                        const _prevActiveItemKey = { ...prevActiveItemKey };

                        if (Object.keys(_prevActiveItemKey).length > 1) {
                            delete _prevActiveItemKey[itemKey];
                            return _prevActiveItemKey;
                        } else return undefined;
                    });
                });
            } else {
                setActiveItemKey({ ...activeItemKey, [itemKey]: statuses.closedVisible });
                setTimeout(() => setActiveItemKey({ ...activeItemKey, [itemKey]: statuses.opening }), 10);
                handleTimeOut(() => setActiveItemKey({ ...activeItemKey, [itemKey]: statuses.opened }));
            }
        } else {
            if (activeItemKey?.[itemKey] === statuses.opened) {
                setActiveItemKey({ [itemKey]: statuses.closing });
                handleTimeOut(() => setActiveItemKey(undefined));
            } else {
                let prevActiveItemKey: ItemKeyType | undefined = undefined;

                setActiveItemKey((prev) => {
                    if (!!prev) {
                        prevActiveItemKey = Object.keys(prev)[0];
                        if (itemKey !== prevActiveItemKey && prev[prevActiveItemKey] === statuses.opened)
                            return { ...activeItemKey, [itemKey]: statuses.closedVisible };
                    }

                    return { [itemKey]: statuses.closedVisible };
                });

                setTimeout(() => {
                    if (!!prevActiveItemKey) setActiveItemKey({ [itemKey]: statuses.opening, [prevActiveItemKey]: statuses.closing });
                    else setActiveItemKey({ [itemKey]: statuses.opening });
                }, 10);
                handleTimeOut(() => setActiveItemKey({ [itemKey]: statuses.opened }));
            }
        }
    };

    return <AccordionContext.Provider value={{ activeItemKey, toggleOpenItem }}>{children}</AccordionContext.Provider>;
};

export const useAccordionContext = (): IUseAccordionContext => {
    const { activeItemKey, toggleOpenItem } = useContext(AccordionContext);

    return { activeItemKey, toggleOpenItem };
};

interface IUseAccordionContext {
    activeItemKey: ActiveItemKeyType;
    toggleOpenItem: (arg: ItemKeyType) => void;
}
