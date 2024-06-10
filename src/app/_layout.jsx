import { View, Text } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default RootLayout = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen name='index' options={{ title: 'Exercises' }} />
            </Stack>
        </QueryClientProvider>
    );
};
