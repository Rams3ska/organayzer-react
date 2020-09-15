import React from "react";
import "../styles/task.css";
import timerIcon from "../img/stopwatch.svg";
import progressIcon from "../img/checkbox.svg";

function Task(props) {
  return (
    <div className="task">
      <div className="task-name">{props.name}</div>
      <div className="task-description">{props.description}</div>
      <div className="task-bottom">
        <div className="task-timer">
          <img className="timer-icon" src={timerIcon} alt="timer" />
          <div className="timer-data">23.06.1998</div>
        </div>
        <div className="task-progress">
          <div className="progress-check">1/1</div>
          <img className="progress-icon" src={progressIcon} alt="check" />
        </div>
      </div>
      <div className="task-progress-line" />
    </div>
  );
}

export default Task;