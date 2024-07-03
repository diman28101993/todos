// import {Task} from "../task/Task"
// import { App } from "../app/App"
import { useState } from "react";
// import {TaskList} from "../taskList/TaskList"
// // import TaskList from "../taskList/TaskList"

export const NewTaskForm = ({ addElem }) => {
  const regular = /^[a-zA-Zа-яёА-ЯЁ]+(?:[\s.-][a-zA-Zа-яёА-ЯЁ]+)*$/;
  const [task, use] = useState("");
  const inputValue = (event) => {
    if(regular.test(event.target.value)){

      use(event.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    use("");


    addElem(task);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={task}
          onChange={inputValue}
          autoFocus
        />
      </form>
    </>
  );
};
