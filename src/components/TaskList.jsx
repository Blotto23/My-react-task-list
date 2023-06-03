import React, { useState } from 'react';
import useTaskList from './useTaskList';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TaskList() {
    const { taskList, createTask, deleteTask, updateTask } = useTaskList();
    const [editingTask, setEditingTask] = useState(null);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleCreateTask = () => {
        if (newTask.trim() !== '') {
            if (newTask.trim().length >= 3) {
                createTask(newTask);
                setNewTask('');
            } else {
                alert('El nombre de la tarea debe tener al menos 3 caracteres');
            }
        } else {
            alert('El nombre de la tarea no puede estar vacío');
        }
    };

    const handleEdit = (id, newDescription) => {
        updateTask(id, newDescription);
        setEditingTask(null);
    };

    const handleComplete = (id) => {
        const updatedCompletedTasks = [...completedTasks];
        if (updatedCompletedTasks.includes(id)) {
            const index = updatedCompletedTasks.indexOf(id);
            updatedCompletedTasks.splice(index, 1);
        } else {
            updatedCompletedTasks.push(id);
        }
        setCompletedTasks(updatedCompletedTasks);
    };

    return (
        <ul>
            <li>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Task"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCreateTask();
                        }
                    }}
                />
            </li>
            {taskList.map((task) => (
                <li key={task.id} className={completedTasks.includes(task.id) ? 'completed' : ''}>
                    {editingTask === task.id ? (
                        <>
                            <input
                                type="text"
                                value={task.description}
                                onChange={(e) => updateTask(task.id, e.target.value)}
                            />
                            <button onClick={() => handleEdit(task.id, task.description)}>Guardar</button>
                        </>
                    ) : (
                        <>
                            <span className={completedTasks.includes(task.id) ? 'completed-task' : ''}>
                                {task.description}
                            </span>
                            <div className="button-group">
                                <button onClick={() => setEditingTask(task.id)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => deleteTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button onClick={() => handleComplete(task.id)}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;

