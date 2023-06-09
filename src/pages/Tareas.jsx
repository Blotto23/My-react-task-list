import React from 'react';
import { Box, Heading, UnorderedList, ListItem, useColorModeValue } from '@chakra-ui/react';
import useTaskList from '../components/useTaskList';

function Tareas() {
    const { taskList } = useTaskList();

    const activeTasks = taskList.filter((task) => !task.completed);

    return (
        <Box pt={50}>
            <Heading as="h2" size="md" textAlign="center" fontSize="25px">
                Tareas
            </Heading>
            <UnorderedList mt={4} listStyleType="none" spacing={2}>
                {activeTasks.map((task, index) => (
                    <ListItem key={task.id} bg={index % 2 === 0 ? 'beige' : 'gray.100'} borderRadius="md" px={2} py={1}>
                        {task.description}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default Tareas;
