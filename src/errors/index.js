import React from "react";
import "./error.css";
import { useParams } from "react-router-dom";

const CustomError = () => {
  const { reason } = useParams();

  return (
    <div id="error">
      <p>{reason}</p>
    </div>
  );
};

export default CustomError;
