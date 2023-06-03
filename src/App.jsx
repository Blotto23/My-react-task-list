import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('taskList'));
    if (storedTasks) {
      setTaskList(storedTasks);
    }
  }, []);

  const editTask = (id, newDescription) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, description: newDescription };
      } else {
        return task;
      }
    });

    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
