import React from 'react';
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
