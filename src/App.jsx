import Form from "./Components/Form";
import ListItem from "./Components/ListItem";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

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
    <div className="App">
      <Form taskList={taskList} setTaskList={setTaskList} />
      <ListItem
        taskList={taskList}
        setTaskList={setTaskList}
        handleDeleteTask={handleDeleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
