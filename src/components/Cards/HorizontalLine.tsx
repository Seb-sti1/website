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
  height = "2px",
  marginTop = "40px",
  marginBottom = "40px",
  color = "lightgrey",
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
      }}
    />
  );
};

export default HorizontalLine;
