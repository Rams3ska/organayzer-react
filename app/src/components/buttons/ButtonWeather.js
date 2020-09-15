import React from "react";
import icon from "../../img/cloud.svg";

function ButtonWeather() {
  return (
    <div className="button-menu" id="button-weather">
      <img src={icon} className="button-icon" alt="weather" />
    </div>
  );
}

export default ButtonWeather;
