import React from 'react';
import { useState } from 'react';
import { Text, View, Pressable, ScrollView, Alert, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
// npm install react-native-elements
import { CheckBox } from 'react-native-elements';

//申請書の内容
const ApplicationForm = () => {
  // const [cloorManage, setColorManage] = useState(false);
  // const [cloorManageAgreement, setColorManageAgreement] = useState(false);
  const [checked, setCheck] = useState(false);
  const router = useRouter();

  // ログイン文字をクリックしたときの処理
  const handleLoginPress = () => {
    if (checked) {
      router.push('../account/cnw');
    } else {
      Alert.alert('同意しないと\nログインできません．');
    }
  };

  return (
    <View>
      <View>
        <ScrollView>
          <View style={{ borderColor: 'gray', borderWidth: 2, top: '10%' }}>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
            <Text style={{ fontSize: 60 }}>申請書内容</Text>
          </View>
        </ScrollView>
        {/* 
        <View style={{ flexDirection: 'row' }}>
          <Link href="/" asChild>
            <Pressable
              onPressIn={() => {
                setColorManage(true);
              }}
              onPressOut={() => {
                setColorManage(false);
              }}
            >
              <Text style={{ left: '20%', fontSize: 24, color: cloorManage ? 'rgba(0, 0, 0, 0.2)' : 'black' }}>{"\n"}{"\n"}{"\n"}同意しない</Text>
            </Pressable>
          </Link>

          <Link href="../home/homepage" asChild>
            <Pressable
              onPressIn={() => {
                setColorManageAgreement(true);
              }}
              onPressOut={() => {
                setColorManageAgreement(false);
              }}
            >
              <Text style={{ left: '46%', fontSize: 24, color: cloorManageAgreement ? 'rgba(0, 0, 0, 0.2)' : 'black' }}>{"\n"}{"\n"}{"\n"}同意してログイン</Text>
            </Pressable>
          </Link>

        </View> */}
        <View>
          <CheckBox
            center
            checkedColor='black'
            title={
              <Text>
                同意しますか？
              </Text>
            }
            containerStyle={{ backgroundColor: '#F8F8F8' }}
            checked={checked}
            onPress={() => setCheck(!checked)}
          />

          <View style={{ top: '50%' }}>
            <Button
              onPress={handleLoginPress}
              title="ログイン"
              color="red"
            />
          </View>

          {/* 
          <Pressable
            onPress={handleLoginPress}>
            <Text style={{ top: '10%', left: '38%', fontSize: 24, }}>{"\n"}ログイン</Text>
          </Pressable> */}
        </View>
      </View>

    </View>
  );
};

export default ApplicationForm;
