// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="account/login"
//         options={{
//           title: 'Sign in',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {

  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ?  DarkTheme:DefaultTheme}>

      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
        <Stack.Screen name="account/login" />
        <Stack.Screen name="account/cnw" />
        <Stack.Screen name="ChangePassWord/password" />
        <Stack.Screen name="account/confirmCode" />
    
        
      </Stack>
      </ThemeProvider>
  );
}
