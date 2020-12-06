import React from 'react';
import { Task, Loader } from '../components';
import '../styles/tasklist.css';



function TaskList({ tasks, isLoaded }) {

  return (
    <div className="tasklist-container">
      {
        isLoaded ? tasks.map((task, index) => <Task {...task} key={index}/>) : <Loader />
      }
    </div>
  );
}

export default TaskList;
