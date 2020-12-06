import React from 'react';
import '../styles/task.css';
import { timerIcon, progressIcon } from '../assets/icons';

function Task({ name, description, progress }) {
  return (
    <div className="task">
      <span className="task-name">{name}</span>
      <div className="task-description">{description}</div>
      <span className="task-bottom">
        <span className="task-timer">
          <img className="timer-icon" src={timerIcon} alt="timer" />
          <span className="timer-data">23.06.1998</span>
        </span>
        <span className="task-progress">
          <span className="progress-check">{progress.current} \ {progress.max}</span>
          <img className="progress-icon" src={progressIcon} alt="check" />
        </span>
      </span>
      <progress className="task-progress-line" />
    </div>
  );
}

export default Task;
