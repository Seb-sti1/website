import { FC, useMemo } from "react";
import "./styles/toggle-btn.scss";

interface ToggleBtnProps {
  defaultValue?: boolean;
  label?: string;
  option1?: string;
  option2?: string;
  onChange: (value: boolean) => void;
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  defaultValue,
  label,
  option1,
  option2,
  onChange,
}) => {
  const isCheckedAtStart = useMemo(() => {
    if (defaultValue === true || defaultValue === false) return defaultValue;
    return false;
  }, []);

  return (
    <div className="toggle-btn">
      {option1 && <span className="option1">{option1}</span>}
      <label className="switch">
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked === true || event.target.checked === false)
              onChange(event.target.checked);
          }}
          defaultChecked={isCheckedAtStart}
        />
        <span className="slider round"></span>
      </label>
      {option2 && <span className="option2">{option2}</span>}
      {label && <span className="label">{label}</span>}
    </div>
  );
};

export default ToggleBtn;
