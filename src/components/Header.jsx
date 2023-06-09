/* import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box bg="blue.500" py={4} px={6} mb={6} textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold" color="white" fontFamily="comics">
                <Link href="/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Task List
                </Link>
            </Heading>
        </Box>
    );
};
 */
import React from 'react';
import { Box, Heading, Link, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg="blue.500" py={4} px={6} mb={6} textAlign="center" position="relative">
            <Heading as="h1" size="xl" fontWeight="bold" color="white" fontFamily="comics">
                <Link href="/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Task List
                </Link>
            </Heading>

            <IconButton
                aria-label="Cambiar modo de color"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                colorScheme="black"
                position="absolute"
                top="8px"
                right="8px"
            />
        </Box>
    );
};
