import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity, Modal, Button } from 'react-native';
import { pxToDp } from '../../src/utils/stylesKits';

import TabTwoScreen from './QR';  // 导入 TabTwoScreen 组件
import { router } from 'expo-router';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    require('../../src/res/INABE_IMG/event_01.png'),
    require('../../src/res/INABE_IMG/event_01.png'),
    require('../../src/res/INABE_IMG/event_01.png'),
    require('../../src/res/INABE_IMG/event_01.png'),
    require('../../src/res/INABE_IMG/event_01.png'),
    require('../../src/res/INABE_IMG/event_01.png'),
];


class homeIndex extends Component {
    scrollX = new Animated.Value(0); // 初始化滚动位置

    state = {
        session: '',
        isScanning: false,  // 添加状态来控制显示哪个组件
        settingVisible: false,
    };

    nofity = () => {
        alert('通知');
    }

    openSetting = () => {
        this.setState({ settingVisible: true })
    }

    closeSetting = () => {
        this.setState({ settingVisible: false })
    }

    scanQRCode = () => {
        this.setState({ isScanning: true });  // 更新状态以显示 TabTwoScreen
    }

    logOut = async () => {
        try {
            const session = await AsyncStorage.getItem('session');
            const res = await axios.post('https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/logOut', {
                session: session,
            })

            if (res.data["statuscode"] == 200) {
                router.push("../(pages)/account/login");
            }
            else {
                console.log("false");

            }
        }
        catch (error) {
            console.error(error)
        }

    }

    render() {
        if (this.state.isScanning) {
            return <TabTwoScreen />;  // 如果状态为扫描，则显示 TabTwoScreen 组件
        }

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>

                    <TouchableOpacity onPress={this.nofity}>
                        <Image
                            source={require('../../src/res/INABE_IMG/notif.png')}
                            style={styles.smallImage}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../../src/res/INABE_IMG/enreIcon.jpg')}
                        style={styles.largeImage}
                    />
                    <TouchableOpacity onPress={this.openSetting}>
                        <Image
                            source={require('../../src/res/INABE_IMG/setting.jpg')}
                            style={styles.smallImage}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.settingLayOut}>
                    <Modal
                        visible={this.state.settingVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={this.closeSetting}
                    >
                        <View style={styles.settingLayOut}>
                            <View style={styles.settingView}>
                                <Button
                                    title='パスワード変更'
                                    onPress={() => {
                                        router.push("../(pages)/ChangePassWord/password");
                                        this.closeSetting();
                                    }}
                                />

                                <Button
                                    title='ログアウト'
                                    onPress={() => {
                                        // indexに遷移
                                        this.closeSetting();
                                        this.logOut();
                                    }}
                                />

                                <Button title="×" onPress={this.closeSetting} />
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.scrollViewWrapper}>
                    <Animated.ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContainer}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        scrollEventThrottle={16} // 每16毫秒处理一次滚动事件
                    >
                        {images.map((image, index) => {
                            const inputRange = [
                                (index - 2) * screenWidth * 0.3,
                                (index - 1) * screenWidth * 0.3,
                                (index) * screenWidth * 0.3,
                            ];

                            const scale = this.scrollX.interpolate({
                                inputRange,
                                outputRange: [0.8, 1, 0.8],
                                extrapolate: 'clamp',
                            });

                            return (
                                <Animated.Image
                                    key={index}
                                    source={image}
                                    style={[styles.image, { transform: [{ scale }] }]}
                                />
                            );
                        })}
                    </Animated.ScrollView>
                </View>

                <TouchableOpacity style={styles.bottomContainer} onPress={this.scanQRCode}>
                    <Image
                        source={require('../../src/res/INABE_IMG/QRCode.png')}
                        style={styles.qrCodeImage}
                    />
                    <View style={styles.scanButton}>
                        <Text style={styles.scanButtonText}>スキャン！</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default homeIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollViewWrapper: {
        position: 'absolute',
        bottom: "20%",
        height: "20%",
        marginVertical: pxToDp(10),
        alignSelf: 'center',
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    image: {
        width: screenWidth * 0.3,
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginHorizontal: pxToDp(5),
    },
    topContainer: {
        height: "20%",
        backgroundColor: "white",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    smallImage: {
        width: pxToDp(100),
        height: pxToDp(50),
        resizeMode: 'contain',
    },
    largeImage: {
        width: pxToDp(170),
        height: pxToDp(100),
        resizeMode: 'contain',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        height: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10%',
    },
    qrCodeImage: {
        width: pxToDp(120),
        height: pxToDp(120),
        position: 'absolute',
        resizeMode: 'contain',
        top: -pxToDp(30),
    },
    scanButton: {
        width: pxToDp(120),
        height: pxToDp(35),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFE5D6",
        borderRadius: pxToDp(30),
        marginTop: pxToDp(80),
    },
    scanButtonText: {
        fontSize: pxToDp(20),
        color: "black",
        fontWeight: "bold",
    },

    settingLayOut: {
        position: 'absolute',
        margin: 18,
        top: 160,  // ここで画像の位置からのオフセットを調整
        width: '100%',
        alignItems: 'flex-end',
    },

    settingView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});