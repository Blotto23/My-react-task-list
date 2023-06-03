import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import TaskList from './components/TaskList';
import Menu from './components/Menu';
import aboutUs from './pages/About_us';
import Tareas from './pages/Tareas';
import Home from './pages/home';

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
    <BrowserRouter>
      <Header />
      <Menu />
      <TaskList />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about_us' Component={aboutUs}></Route>
        <Route path='/tareas' Component={Tareas}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
