import React, { useEffect, useState } from "react";
import Task from "./Task";
import "../styles/tasklist.css";

const taskList = [
  {
    name: "Task one",
    description: "With random description",
  },
  {
    name: "Task Two",
    description:
      "Layers. Assets. Page 1. bottom-menu. task-box. task-deployed. Task Name. Task Description. Point Desk. task-bg. task-bg-1. task. Task Name. task-bg. bg. Design. Prototype. Code. 12. 178. 390. 40. 0. Constra..",
  },
  {
    name: "Задача номер три. Ебать его в сраку. Не ну а че. Задача как задача.",
    description: "Ага",
  },
  {
    name: "Постирать носки",
    description: "",
  },
  {
    name: "А?",
    description: "Б!",
  },
];

function TaskList() {
  let [list, setList] = useState([]);

  useEffect(() => setList(taskList), []);

  return (
    <div className="tasklist-container">
      {
        list.map((task, key) => (
          <Task name={task.name} description={task.description} key={key}/>
        ))
      }
    </div>
  );
}

export default TaskList;