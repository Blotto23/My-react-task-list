import React from 'react';
import useTaskList from '../components/useTaskList';

function Tareas() {
    const { taskList } = useTaskList();

    const activeTasks = taskList.filter((task) => !task.completed);

    return (
        <div>
            <h2>Tareas</h2>
            <ul>
                {activeTasks.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;
