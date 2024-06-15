import { useState } from "react";

const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();

    const newTask = {
      // id: +new Date(),
      id: crypto.randomUUID(),
      title: task,
      completed: false,
    };

    setTaskList((pretasks) => {
      return [...pretasks, newTask];
    });
    setTask("");
  }

  return (
    <div>
      <form>
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
        <button
          type="submit"
          className="btn add-task_btn"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </form>

      <h1 className="title">Todo List</h1>

      {taskList.length === 0 && " Currently no Todo tasks! "}
    </div>
  );
};

export default Form;
