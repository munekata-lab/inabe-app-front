import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import { pxToDp } from '../../src/utils/stylesKits';
import { Link } from "expo-router";

const { width: screenWidth } = Dimensions.get('window');

const notifys = [
    {
        title: 'タイトル1',
        content: '内容内容内容内容内容',
        datetime: '2024/8/30',
        isread: false
    },
    {
        title: 'タイトル2',
        content: '内容内容内容内容内容',
        datetime: '2024/8/30',
        isread: true
    },
    {
        title: 'タイトル3',
        content: '内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n内容内容内容内容内容\n',
        datetime: '2024/8/30',
        isread: true
    },
    {
        title: 'タイトル4',
        content: '内容内容内容内容内容',
        datetime: '2024/8/30',
        isread: true
    },
    {
        title: 'タイトル5',
        content: '内容内容内容内容内容',
        datetime: '2024/8/30',
        isread: true
    },
]

export default function notification() {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.pageTitle}>通知</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {
                    notifys.map((u, i) => {
                        return (
                            <Card key={i} containerStyle={styles.cardContainerStyle}>
                                <Card.Title>{u.title}</Card.Title>
                                <Card.Divider />
                                <Text style={styles.notifyContextStyle}>{u.content}</Text>
                                <Text style={styles.notifyDateStyle}>
                                    {u.isread ? "既読　" : ""}
                                    {u.datetime}
                                </Text>
                            </Card>
                        );
                    })
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollViewContainer: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    topContainer: {
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: "white",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardContainerStyle: {
        width: "95%",
        marginTop: 15
    },
    pageTitle: {
        fontSize: pxToDp(20),
        color: "black",
        fontWeight: "bold",
    },
    notifyContextStyle: {
        marginTop: 3,
        marginBottom: 10,
    },
    notifyDateStyle: {
        textAlign: "right"
    }
});
