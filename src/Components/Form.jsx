const Form = () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <label htmlFor="item">New Item:</label>
          <input type="text" id="item" autoComplete="off" />
        </div>
        <button className="btn add-task_btn">Add Task</button>
      </form>

      <h1 className="title">Todo List</h1>

      <ul className="todo-list">
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
