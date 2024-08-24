import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';

//login page
const LoginPage = () => {
  const [cloorManage, setColorManage] = useState(false);
  const [cloorManageNewAccount, setColorManageNewAccount] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
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
        />
      </View>

      <View>
        <Link href="../home/homepage" asChild>
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
        <Link href="./cnw" asChild>
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
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
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
