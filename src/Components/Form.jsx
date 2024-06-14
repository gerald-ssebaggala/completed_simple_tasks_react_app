import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([
    "Calling parents",
    "Call my Siblings",
    "Finish up my projects",
  ]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    setTaskList((prestate) => [...prestate]);
    console.log("added");
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label htmlFor="item">New Item:</label>
          <input
            type="text"
            id="item"
            autoComplete="off"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button className="btn add-task_btn" onClick={handleAddTask}>
          Add Task
        </button>
      </form>

      <h1 className="title">Todo List</h1>

      <ul className="todo-list">
        {taskList.map((task, id) => (
          <li className="task" key={id}>
            <label htmlFor="">
              <input type="checkbox" id="checkbox" />
              {task}
            </label>
            <button className="btn delete_btn">Delete</button>
          </li>
        ))}
        <li className="task">
          <label htmlFor="">
            <input type="checkbox" id="checkbox" />
            item 1
          </label>
          <button className="btn delete_btn">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Form;
