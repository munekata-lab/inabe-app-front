import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

// create new accout page
const CreateNewAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View >
        <Text style={{ top: '50%', left: '21%', fontSize: 24, }}>新しいアカウントの作成</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          placeholderTextColor='gray'
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          placeholderTextColor='gray'
        />
        <TextInput
          style={styles.input}
          placeholder='password（確認）'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor='gray'
        />

        <View style={{ top: '170%' }}>
          <Button
            onPress={() => {
              router.push("./confirmCode")
            }}
            title="登録"
            color="red"
          />
        </View>

        {/* 
      <View>
        <Link href="../../(tabs)/homeIndex" asChild>
          <Pressable>
            <Text style={{ top: '1600%', left: '44%', fontSize: 24, color: 'red' }}>登録</Text>
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
    top: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    color:'black'
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
