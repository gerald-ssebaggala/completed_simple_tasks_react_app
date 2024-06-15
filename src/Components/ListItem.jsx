const ListItem = ({ taskList, setTaskList, toggleTask, handleDeleteTask }) => {
  return (
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
  );
};

export default ListItem;
