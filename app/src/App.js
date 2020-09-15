import React, { useEffect, useState } from "react";
import ButtonTask from "./components/buttons/ButtonTask";
import ButtonInfo from "./components/buttons/ButtonInfo";
import ButtonSettings from "./components/buttons/ButtonSettings";
import ButtonWeather from "./components/buttons/ButtonWeather";
import ButtonExit from "./components/buttons/ButtonExit";
import TaskList from "./components/TaskList";
import Loader from "./components/Loader";

function App() {
  let [isLoaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className="container">
      <div className="content-box">
        {isLoaded === true ? <TaskList /> : <Loader />}
      </div>
      <div className="blue-line" />
      <div className="bottom-menu">
        <ButtonTask />
        <ButtonWeather />
        <ButtonInfo />
        <ButtonSettings />
        <ButtonExit />
      </div>
    </div>
  );
}

export default App;
