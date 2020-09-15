import React from "react";
import icon from "../../img/add-red.svg";

function ButtonExit() {
  return (
    <div className="button-menu" id="button-exit">
      <img
        src={icon}
        className="button-icon"
        style={{ filter: "contrast(0.5)", transform: "rotate(45deg)" }}
        alt="exit"
      />
    </div>
  );
}

export default ButtonExit;
