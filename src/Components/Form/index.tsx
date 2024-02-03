import React, { useState } from "react";
import Button from "../Button";
import style from "./form.module.scss";

const Form = (props: any) => {
  const [valor, setValor] = useState({ task: "", time: "00:00" });

  const addNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setTasks((oldTasks: any) => [...oldTasks, { ...valor }]);
    resetFields();
  };

  const resetFields = () => {
    setValor({ task: "", time: "00:00" });
  };
  return (
    <form className={style.newTask} onSubmit={addNewTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Add a new task</label>
        <input
          value={valor.task}
          onChange={(event) => setValor({ ...valor, task: event.target.value })}
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        ></input>
      </div>
      <div className={style.inputContainer}>
        <label>Tempo</label>
        <input
          value={valor.time}
          onChange={(event) => setValor({ ...valor, time: event.target.value })}
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="23:59:59"
          required
        ></input>
      </div>
      <Button type="submit">Add</Button>
    </form>

  );
};

export default Form;
