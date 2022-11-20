import React from "react";
import "./error.css";
import { useParams } from "react-router-dom";

const CustomError = () => {
  const { reason } = useParams();

  switch (reason) {
    case "mambox":
      return (
        <div id="error">
          <p>
            La MamBox n'est pas disponible pour le moment.
            <br />
            <a href="mambox.kerbourch.fr">Réessayez</a> plus tard.
          </p>
        </div>
      );
    default:
      return (
        <div id="error">
          <p>Unknown error.</p>
        </div>
      );
  }
};

export default CustomError;
