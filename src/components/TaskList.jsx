import React, { useState, useEffect } from 'react';
import useTaskList from './useTaskList';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
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

        setTimeout(() => {
            deleteTask(id); // Eliminar la tarea después de 3 segundos
        }, 3000);
    };

    return (
        <Box>
            <Input
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
            {
                taskList.map((task, index) => (
                    <Box
                        key={task.id}
                        p={2}
                        mb={2}
                        bg={index % 2 === 0 ? 'beige.100' : 'gray.200'}
                        borderRadius="md"
                    >
                        <Flex alignItems="center">
                            {editingTask === task.id ? (
                                <>
                                    <Input
                                        flex="1"
                                        value={task.description}
                                        onChange={(e) => updateTask(task.id, e.target.value)}
                                    />
                                    <Button size="sm" onClick={() => handleEdit(task.id, task.description)}>
                                        Guardar
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text
                                        flex="1"
                                        className={`${completedTasks.includes(task.id) ? 'completed-task' : ''}`}
                                    >
                                        {task.description}
                                    </Text>
                                    <Flex>
                                        <Button
                                            size="sm"
                                            onClick={() => setEditingTask(task.id)}
                                            leftIcon={<FontAwesomeIcon icon={faEdit} />}
                                            variant="outline"
                                            colorScheme="blue"
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            size="sm"
                                            onClick={() => deleteTask(task.id)}
                                            leftIcon={<FontAwesomeIcon icon={faTrash} />}
                                            variant="outline"
                                            colorScheme="red"
                                        >
                                            Eliminar
                                        </Button>
                                        <Button
                                            size="sm"
                                            onClick={() => handleComplete(task.id)}
                                            leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                            variant="outline"
                                            colorScheme={completedTasks.includes(task.id) ? 'green' : 'gray'}
                                        >
                                            Completar
                                        </Button>
                                    </Flex>
                                </>
                            )}
                        </Flex>
                    </Box>
                ))
            }
        </Box >
    );
}

export default TaskList;
