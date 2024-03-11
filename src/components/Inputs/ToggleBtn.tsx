import { FC, useMemo, useState } from "react";
import "./styles/toggle-btn.scss";

interface ToggleBtnProps {
  className?: string;
  defaultValue?: boolean;
  option1?: string;
  option2?: string;
  onChange: (value: boolean) => void;
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  className,
  defaultValue,
  option1,
  option2,
  onChange,
}) => {
  const isCheckedAtStart = useMemo(() => {
    if (defaultValue === true || defaultValue === false) return defaultValue;
    return false;
  }, []);

  const [isChecked, setChecked] = useState(isCheckedAtStart);

  return (
    <div className={"toggle-btn" + (className ? " " + className : "")}>
      <input
        type="checkbox"
        onChange={(event) => {
          if (event.target.checked || !event.target.checked) {
            setChecked(event.target.checked);
            onChange(event.target.checked);
          }
        }}
        defaultChecked={isCheckedAtStart}
        className="checkbox"
      />
      <div className="knobs">
        <div className={"knobs-before" + (isChecked ? " checked" : "")}>
          {isChecked ? option2 : option1}
        </div>
      </div>
      <div className="layer" />
    </div>
  );
};

export default ToggleBtn;
