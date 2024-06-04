import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router';

export default RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ title: 'Exercises'}} />
    </Stack>
  )
}