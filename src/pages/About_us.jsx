import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function aboutUs() {
    return (
        <Box pt={50}>
            <Heading as="h1" textAlign="center" fontSize="25px">
                Sobre Nosotros
            </Heading>
            <Text textAlign="justify">
                Esta es una herramienta que permite a los usuarios organizar y gestionar sus tareas de manera eficiente. Con una interfaz intuitiva, los usuarios pueden crear, editar, eliminar tareas y marcarlas como completadas. Con esta aplicación, los usuarios pueden mantener un seguimiento claro de sus responsabilidades, mejorar su productividad y tener una visión general de las tareas pendientes, lo que les permite organizar su tiempo de manera más efectiva.
            </Text>
            <Text textAlign="justify">
                En esta aplicación se utilizaron tecnologías web como HTML, CSS y JavaScript, junto con frameworks como React y bases de datos como MongoDB.
            </Text>
        </Box>
    );
}

export default aboutUs;