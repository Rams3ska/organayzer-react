import React from "react";
import icon from "../../img/to-do-list.svg";

function ButtonTask() {
  return (
    <div className="button-menu" id="button-task">
      <img src={icon} className="button-icon" alt="task" />
    </div>
  );
}

export default ButtonTask;
