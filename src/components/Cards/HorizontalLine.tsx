import { FC } from "react";

interface HorizontalLineProps {
  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}

const HorizontalLine: FC<HorizontalLineProps> = ({
  width = "50%",
  height = "3px",
  marginTop = "40px",
  marginBottom = "40px",
  color = "var(--border-color)",
}) => {
  return (
    <hr
      style={{
        color: color,
        width: width,
        height: height,
        background: color,
        borderRadius: "2px",
        marginTop: marginTop,
        marginBottom: marginBottom,
        border: "0",
      }}
    />
  );
};

export default HorizontalLine;
