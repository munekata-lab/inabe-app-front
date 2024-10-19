import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';


const _layout = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ?  DarkTheme:DefaultTheme}>

        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="notification" />
        </Stack>
        </ThemeProvider>
    );
};

export default _layout;
