import "./AutoCloseInput.css";

interface IAutoCloseInputProps {
    value: boolean;
    onClick: any;
}

export const AutoCloseInput = ({ value, onClick }: IAutoCloseInputProps) => {
    return (
        <div className="auto-close-input">
            <p className="no-select">Auto close {value ? "on" : "off"}</p>
            <div className={`indicator-track ${value ? "on" : "off"}`} onClick={onClick}>
                <div className="indicator" />
            </div>
        </div>
    );
};
