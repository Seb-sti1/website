import { FC } from "react";
import "./maintenance.scss";

const Maintenance: FC = () => {
  return (
    <div id="maintenance">
      <p>
        This site is currently under maintenance.
        <br />
        It will be back as soon as possible !
      </p>
      <img src="/images/gears.png" alt="gears" />
    </div>
  );
};

export default Maintenance;
