import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import axios from 'axios';
import { pxToDp } from '@/src/utils/stylesKits';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router';

class password extends Component {
  state = {
    email: '',
    session: '',
    prePassword: '',
    newPassword: ''
  }

  checkEmail = () => {
    const { email } = this.state;
    if (email) {
      this.changePassword();
    }
    else Alert.alert('Emailを入力してください');

  }

  changePassword = async () => {
    const { email,  prePassword, newPassword } = this.state;
    try {
      const session = await AsyncStorage.getItem('session');
      const res = await axios.post('https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/changePassword', {
        email: email,
        session: session,
        prePassword: prePassword,
        newPassword: newPassword,
      })
      
      if (res.data["statuscode"] == 200) {
        router.push("../../(tabs)/homeIndex");
      }
      else {
        console.log("false");

      }
    }
    catch (error) {
      console.error(error)
    }
  }
  emailChangeText = (email: any) => {
    this.setState({ email });
  }
  prePassChangeText = (prePassword: any) => {
    this.setState({ prePassword });
  }
  newPassChangeText = (newPassword: any) => {
    this.setState({ newPassword });
  }
  render() {
    const { email } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ top: '190%', left: '32%', fontSize: 24, }}>
            パスワード変更
          </Text>
        </View>

        <View>
          {/* 
        テキストボックスに入力されたパスワードを保持する変数を用意する
        */}
          <TextInput
            style={styles.input}
            placeholder="メールアドレスを入力してください"
            value={email}
            onChangeText={this.emailChangeText}
            placeholderTextColor='gray'
          />
          <TextInput
            style={styles.input}
            placeholder='旧パスワード'
            onChangeText={this.prePassChangeText}
            placeholderTextColor='gray'
          />

          <TextInput
            style={styles.input}
            placeholder='新パスワード'
            onChangeText={this.newPassChangeText}

            placeholderTextColor='gray'
          />

          <TextInput
            style={styles.input}
            placeholder='新パスワード（確認）'
            onChangeText={this.newPassChangeText}

            placeholderTextColor='gray'
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => {
              // ここでパスワードのチェック
              this.checkEmail();
            }}
            title="パスワード変更"
            color="red"
          />
        </View>

      </View>
    );
  }

}

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
  },
  button: {
    top: pxToDp(250),
    padding: 10,
  }

});


export default password;