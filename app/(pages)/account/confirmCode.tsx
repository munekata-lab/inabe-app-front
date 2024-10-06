import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import axios from 'axios';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { router } from 'expo-router';


class confirmCode extends Component {
    state = {
        emailNumber: '',
        vcodeTxt: '',
        btnText: '再発送',
        isCountDowning: false
    }

    //認証コードカウントダウン
    countDown = () => {
        console.log('begin count down');

        this.setState({ isCountDowning: true });
        let seconds = 3;
        this.setState({ btnText: `再発送(${seconds}s)` });

        //認証コード再発送
        let timeId = setInterval(() => {
            seconds--;
            this.setState({ btnText: `重新获取(${seconds}s)` });
            if (seconds == 0) {
                clearInterval(timeId);
                this.setState({ btnText: `重新获取`, isCountDowning: false });
            }
        }, 1000);
    };

    //       // 验证码输入框的值改变事件
    //   onVcodeChangeText = vcodeTxt => {
    //     this.setState({vcodeTxt});
    //   };

    //認証コードinput完了イベント
    onVcodeSubmitEditing = async () => {
        const { vcodeTxt, emailNumber } = this.state;
        if (vcodeTxt.length != 6) {
            console.log('認証コードが間違っています');
            return;
        }
        try {
            const res = await axios.post('https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/confirmEmail', {
                email: emailNumber,
                confirmation_code: vcodeTxt,
            })

            if (res.data["statuscode"] == 200) {
                router.push("./login");
            }
            else {
                console.log("false");
                
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    // 验证码输入框的值改变事件
    onVcodeChangeText = (vcodeTxt: any) => {
        this.setState({ vcodeTxt });
    };
    repGetVcode = () => {
        this.countDown();
    };
    render() {
        const { emailNumber, vcodeTxt, btnText, isCountDowning } = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <Text
                        style={{ marginTop: pxToDp(50), fontSize: pxToDp(25), color: '#888', fontWeight: 'bold' }}>
                        6桁の認証コードを入力してください
                    </Text>
                </View>

                <View style={{ marginTop: pxToDp(10) }}>
                    <Text style={{ color: '#888' }}>
                        発送済み: {emailNumber}
                    </Text>
                </View>

                <View>
                    <CodeField
                        value={vcodeTxt}
                        onChangeText={this.onVcodeChangeText}
                        onSubmitEditing={this.onVcodeSubmitEditing}
                        cellCount={6}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType="number-pad"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>

                <View>
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Button
                            title='再発送'
                            onPress={() => { this.repGetVcode }}
                        // style={{
                        //   width: '85%',
                        //   alignSelf: 'center',
                        //   height: pxToDp(40),
                        //   borderRadius: pxToDp(20),
                        // }
                        />
                    </View>
                </View>

                <View>
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Button
                            title='確認'
                            onPress={() => { this.onVcodeSubmitEditing() }}
                        // style={{
                        //   width: '85%',
                        //   alignSelf: 'center',
                        //   height: pxToDp(40),
                        //   borderRadius: pxToDp(20),
                        // }
                        />
                    </View>
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
    codeFiledRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        color: '#7d53ea',
    },
    focusCell: {
        borderColor: '#7d53ea',
    },
})

export default confirmCode;