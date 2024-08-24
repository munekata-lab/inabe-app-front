import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

//アプリの機能を簡単に説明するページ（イメージはNetflixのログイン前のページ）
const FirstPage = () => {
  return (
    <View>
      <View style={{ left: '27%', top: '2500%' }}>
        <Text>
          アプリ紹介(簡単に説明するページ)
        </Text>
      </View>

      <View style={{ position: 'absolute', right: '5%', top: '300%' }}>
        <Link href="/account/login" asChild>
          <Pressable>
            <Text
              style={{
                fontSize: 24,
                color: 'red',
              }}
            >
              ログイン
            </Text>
          </Pressable>
        </Link>
      </View>

    </View>
  );
};

export default FirstPage;