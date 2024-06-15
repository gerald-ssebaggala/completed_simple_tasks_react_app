import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([
    // "Calling parents",
    // "Call my Siblings",
    // "Finish up my projects",
  ]);

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

  function handleDeleteTask(id) {
    setTaskList((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  function toggleTask(id, completed) {
    setTaskList((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      })
    );
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

      <ul className="todo-list">
        {taskList.map((todoTask) => (
          <li className="task" key={todoTask.id}>
            <label htmlFor="">
              <input
                type="checkbox"
                id="checkbox"
                checked={todoTask.completed}
                onChange={(e) => toggleTask(todoTask.id, e.target.checked)}
              />
              {todoTask.title}
            </label>
            <button
              className="btn delete_btn"
              onClick={() => handleDeleteTask(todoTask.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
