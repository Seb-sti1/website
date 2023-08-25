import React from "react";
import "./error.css";
import { useParams } from "react-router-dom";

const CustomError = () => {
  const { reason } = useParams();

  switch (reason) {
    default:
      return (
        <div id="error">
          <p>Unknown error.</p>
        </div>
      );
  }
};

export default CustomError;
