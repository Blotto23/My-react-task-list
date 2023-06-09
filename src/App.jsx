/* import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Box, ChakraProvider, Container, Grid, GridItem, Button, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import TaskList from './components/TaskList';
import Menu from './components/Menu';
import AboutUs from './pages/About_us';
import Tareas from './pages/Tareas';
import Home from './pages/Home';

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
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.100">
          <Header />
          <Container maxW="container.lg" py={6}>
            <Menu />
            <TaskList />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/tareas" element={<Tareas />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
 */

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Box, ChakraProvider, Container, extendTheme, ColorModeScript } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import TaskList from './components/TaskList';
import Menu from './components/Menu';
import AboutUs from './pages/About_us';
import Tareas from './pages/Tareas';
import Home from './pages/Home';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

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
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minH="100vh" >
          <Header />
          <Container maxW="container.lg" py={6}>
            <Menu />
            <TaskList />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/tareas" element={<Tareas />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
