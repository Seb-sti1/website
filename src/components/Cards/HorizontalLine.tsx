import { FC } from "react";

const HorizontalLine: FC = () => {
  return (
    <hr
      style={{
        color: "lightgrey",
        width: "50%",
        height: "2px",
        background: "lightgrey",
        borderRadius: "2px",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    />
  );
};

export default HorizontalLine;
