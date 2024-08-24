import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

// create new accout page
const HomePage = () => {
  return (
    <View>
      <View style={{ left: '35%', top: '1800%' }}>
        <Text style={{ fontSize: 24 }}>
          HomePage
        </Text>
      </View>

      {/* indexに飛ぶ*/}
      <View style={{ position: 'absolute', right: '5%', top: '300%' }}>
        <Link href="/" asChild>
          <Pressable>
            <Text style={{
              fontSize: 24,
              color: 'red',
            }}>ログアウト
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default HomePage;