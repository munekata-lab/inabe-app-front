import { View, Text, TextInput, StyleSheet, Alert, Button } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';

const email = () => {

  const [email, setEmail] = useState('');
  const router = useRouter();

  // 改良が必要(正規表現を使った文字列チェック)
  const handleChangePassWord = () => {
    if (email) {
      router.push("./password")
    } else {
      Alert.alert('Emailを入力してください')
    }
  }

  return (
    <View>
      <View>
        <Text style={{ top: '190%', left: '32%', fontSize: 24, }}>
          パスワード変更
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={{ top: '170%' }}>
        <Button
          onPress={handleChangePassWord}
          title="パスワード変更"
          color="red"
        />
      </View>
    </View>

  );
}

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

});

export default email;