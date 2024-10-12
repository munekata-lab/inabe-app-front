import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// 导入本地图片
import homeIcon from '../../src/res/INABE_IMG/home.png';
import mapIcon from '../../src/res/INABE_IMG/map.png';
import bookIcon from '../../src/res/INABE_IMG/book.png';

import Home from '../../app/(tabs)/homeIndex';
import PhotoGallery from '../../app/(tabs)/photoGallery';
import Book from '../../app/(tabs)/index';




// 创建 Tab 导航器
const Tab = createBottomTabNavigator();

function HomePage() {
  return <Home />;
}

function PhotoGalleryPage() {
  return <PhotoGallery />;
}

function BookPage() {
  return <Book />;
}


class Index extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused ? homeIcon : homeIcon;
            } else if (route.name === 'PhotoGallery') {
              icon = focused ? mapIcon : mapIcon;
            } else if (route.name === 'Book') {
              icon = focused ? bookIcon : bookIcon;
            }
            return <Image source={icon} style={{ width: 20, height: 20 }} />;
          },
          tabBarStyle: {
            backgroundColor: '#FFE5D6', // 设置TabBar背景颜色
          },
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
          headerShown: false,

        })}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="PhotoGallery"
          component={PhotoGalleryPage}
          options={{ title: 'PhotoGallery' }}
        />
        <Tab.Screen
          name="Book"
          component={BookPage}
          options={{ title: 'Book' }}
        />
      </Tab.Navigator>
    );
  }
}

export default Index;



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
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color="#FFE5D6" />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="homeIndex"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
//           ),
//         }}
//       />

//     </Tabs>
//   );
// }
