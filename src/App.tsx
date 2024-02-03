import React, { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import style from "./app.module.scss";
import Stopwatch from "./Components/Stopwatch";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Example task",
      time: "02:00:00",
    },
  ]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
