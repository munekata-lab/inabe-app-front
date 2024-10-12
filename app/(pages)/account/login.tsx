import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//login page
const LoginPage = () => {
  const [cloorManage, setColorManage] = useState(false);
  const [cloorManageNewAccount, setColorManageNewAccount] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handlePostRequest = async () => {
    // とりあえずパスワードのバリデーション
    if (!password) {
      Alert.alert('パスワードを入力してください')
    }
    else {
      try {
        const result = await axios.post('https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/login', {
          email: email,
          password: password,
        });

        console.log('レスポンスデータ', result.data);

        if (result.data["statuscode"] == 200) {
          await AsyncStorage.setItem('session', result.data["session"]);
          router.push("../../(tabs)/homeIndex");
        } else {
          // とりあえずこのエラー文にしているが，emailを入力していない場合もこのAlert文が実行される
          Alert.alert('Emailもしくはパスワードが間違っています')
        }

      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <View style={styles.container}>
    <View>
      <View>
        <Text style={{ top: '190%', left: '42%', fontSize: 24, }}>
          Sign in
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      {/* 
        LinkタブからButtonタブに変える
         */}
      <View style={{ top: '220%' }}>
        <Button
          onPress={handlePostRequest}
          title="ログイン"
          color="red"
        />
      </View>

      <View style={{ top: '240%' }}>
        <Button
          onPress={() => router.push("../ApplicationForm/af")}
          title="新規作成はこちら"
          color="red"
        />
      </View>


      {/* 
        <View>
          <Link href="../../(tabs)/homeIndex" asChild>
            <Pressable
              onPressIn={() => {
                setColorManage(true);
              }}
              onPressOut={() => {
                setColorManage(false);
              }}
            >
              <Text style={{ top: '1500%', left: '40%', fontSize: 24, color: cloorManage ? 'lightcoral' : 'red' }}>ログイン</Text>
            </Pressable>
          </Link>
        </View>

        <View>
          <Link href="../ApplicationForm/af" asChild>
            <Pressable
              onPressIn={() => {
                setColorManageNewAccount(true);
              }}
              onPressOut={() => {
                setColorManageNewAccount(false);
              }}
            >
              <Text style={{ top: '1700%', left: '30%', fontSize: 24, color: cloorManageNewAccount ? 'lightcoral' : 'red' }}>新規作成はこちら</Text>
            </Pressable>
          </Link>
        </View> */}

    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    top: '300%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginPage;