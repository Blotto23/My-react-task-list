import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

function Menu() {
    return (
        <Box bg="blue.500" py={4} px={6} mb={6}>
            <Text as={NavLink} exact="true" to="/" color="white" fontSize="lg" fontWeight="bold" mr={4} textDecoration="underline" _hover={{ textDecoration: 'none' }}>
                Home
            </Text>
            <Text as={NavLink} to="/tareas" color="white" fontSize="lg" fontWeight="bold" mr={4} textDecoration="underline" _hover={{ textDecoration: 'none' }}>
                Tareas
            </Text>
            <Text as={NavLink} to="/about_us" color="white" fontSize="lg" fontWeight="bold" textDecoration="underline" _hover={{ textDecoration: 'none' }}>
                About
            </Text>
        </Box>
    );
}

export default Menu;