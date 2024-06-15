import Form from "./Components/Form";
import ListItem from "./Components/ListItem";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("myTasks");

    if (storedTasks == null) return [];
    return JSON.parse(storedTasks);
  });

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(taskList));
  }, [taskList]);

  // console.log(storedTasks);

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
