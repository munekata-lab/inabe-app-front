import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';

// create new accout page
const CreateNewAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handlePostRequest = async () => {
    // emailが入力されていない場合の処理とパスワードが空の時の処理を書く，最終的にはemailのバリデーションチェックも行いたい

    if (password != confirmPassword) {
      Alert.alert('パスワードが一致しません')
    } else {
      try {
        const result = await axios.post('https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/registerByEmail', {
          email: email,
          password: password,
        });
        console.log('レスポンスデータ', result.data);

        if (result.data["statuscode"] == 200) {
          router.push("../../(tabs)/homeIndex");
        } else {
          // とりあえずこのエラー文にしているが，emailを入力していない場合もこのAlert文が実行される
          Alert.alert('パスワードを6文字以上入力してください')
        }

      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <View>
      <Text style={{ top: '50%', left: '21%', fontSize: 24, }}>新しいアカウントの作成</Text>

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
      <TextInput
        style={styles.input}
        placeholder='password（確認）'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <View style={{ top: '170%' }}>
        <Button
          onPress={handlePostRequest}
          title="登録"
          color="red"
        />
      </View>

      {/* 
      <View style={{ top: '170%' }}>
        <Button
          onPress={() => {
            router.push("../../(tabs)/homeIndex")
          }}
          title="登録"
          color="red"
        />
      </View> */}

      {/* 
      <View>
        <Link href="../../(tabs)/homeIndex" asChild>
          <Pressable>
            <Text style={{ top: '1600%', left: '44%', fontSize: 24, color: 'red' }}>登録</Text>
          </Pressable>
        </Link>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    top: '100%',
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
export default CreateNewAccount;
