import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';

const password = () => {
  const router = useRouter();

  return (
    <View>
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
          placeholder='旧パスワード'
        />

        <TextInput
          style={styles.input}
          placeholder='新パスワード'
        />

        <TextInput
          style={styles.input}
          placeholder='新パスワード（確認）'
        />
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => {
            // ここでパスワードのチェック
            router.push("../../(tabs)/homeIndex")
          }}
          title="パスワード変更"
          color="red"
        />
      </View>

    </View>
  );
}

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
    top: '150%',
    padding: 10,
  }

});


export default password;