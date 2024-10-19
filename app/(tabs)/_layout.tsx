import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
});

export default Index;