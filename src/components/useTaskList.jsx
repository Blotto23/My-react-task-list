import { useState, useEffect } from 'react';

function useTaskList() {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('taskList'));
        if (storedTasks) {
            setTaskList(storedTasks);
        }
    }, []);

    const createTask = (description) => {
        const newTask = {
            id: Date.now(),
            description,
            completed: false,
        };

        const newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    const deleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    const updateTask = (id, newDescription) => {
        const newTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, description: newDescription };
            }
            return task;
        });

        setTaskList(newTaskList);
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    return { taskList, createTask, deleteTask, updateTask };
}

export default useTaskList;

