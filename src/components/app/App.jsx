import { Footer } from "../taskFilter/Footer";
import { TaskList } from "../taskList/TaskList";
import { Header } from "../header/Header";
import { useState } from "react";
import { NewTaskForm } from "../newTaskForm/NewTaskForm";
let maxId = 10;
export const App = () => {
  const [gg, wp] = useState(  [
  
    {
      description: "Completed task",
      created: "less than a minute",
      id: 1,
      stateCompleted: false,
    },
    {
      description: "Editing task",
      created: "less than a minute",
      id: 2,
      stateCompleted: false,
    },
    {
      description: "Active task",
      created: "less than a minute",
      id: 3,
      stateCompleted: false,
    },
  ]);

  const delEl = (id) => {
    wp([...gg.filter((el) => el.description !== id)]);
  };
  const addTask = (e) => {
    const newItem = {
      description: e,
      created: "less than a minute",
      id: maxId++,
      stateCompleted: false,
    };
    wp([...gg, newItem]);
  };

  const stateCompleted = (e) => {
    const idx = gg.findIndex((el) => el.id === e);
    const item = gg[idx];
    if (!gg[idx].stateCompleted) {
      const a = { ...item, stateCompleted: true };
      wp([...gg.slice(0, idx), a, ...gg.slice(idx + 1)]);
    } else {
      const a = { ...item, stateCompleted: false };
      wp([...gg.slice(0, idx), a, ...gg.slice(idx + 1)]);
    }
  };
  const filterBtn = (e) => {
 

};

  return (
    <>
      <Header />
      <NewTaskForm addElem={addTask} className = 'info' />

      <main>
        <section className="main">
          <ul className="todo-list">
            <TaskList
              todo={gg}
              onDeleted={(key) => delEl(key)}
              comp={stateCompleted}
            />
          </ul>
        </section>
      </main>
      <Footer
        btnClearAll={filterBtn}
        btnCompleted={filterBtn}
        btnActive={filterBtn}
        btnAll={filterBtn}
      />
    </>
  );
};
