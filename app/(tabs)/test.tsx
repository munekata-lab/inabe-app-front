import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Button } from 'react-native'; 
import { pxToDp } from '../../src/utils/stylesKits';


class PhotoGallery extends Component {
    state = {
        images: [],
        modalVisible: false,
        selectedImage: null,
    };

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages = () => {
        // 使用 require 语法加载本地图片
        this.setState({
            images: [
                require('/Users/higashi/inabe-app-front/assets/images/icon.png'),
                require('../../src/res/INABE_IMG/book.png')
            ]
        }, () => {
            console.log("image url: ", this.state.images);
        });
    };

    reflush = () => {
        this.fetchImages();
    }

    openModal = (image: never) => {
        this.setState({ modalVisible: true, selectedImage: image });
    };

    closeModal = () => {
        console.log("pressed close button");
        this.setState({ modalVisible: false, selectedImage: null });
    };

    render() {
        const { images, modalVisible, selectedImage } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.imageGrid}>
                        {Array.isArray(images) && images.length > 0 ? (
                            images.map((image, index) => (
                                <TouchableOpacity key={index} onPress={() => this.openModal(image)}>
                                    <Image
                                        source={image}
                                        style={styles.image}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text>No images found</Text>
                        )}
                    </View>
                </ScrollView>

                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade" // 添加动画效果
                    onRequestClose={this.closeModal}
                >
                    <View style={styles.modalContainer}>
                        {selectedImage && (
                            <Image
                                source={selectedImage}
                                style={styles.fullImage}
                                resizeMode="contain"
                            />
                        )}
                        <TouchableOpacity style={styles.closeButton} onPress={this.closeModal} activeOpacity={1}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View>
                    <Button
                        title='reflush'
                        onPress={this.reflush}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: pxToDp(50),
        flex: 1,
        backgroundColor: 'black',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'blue',


    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',

    },
    fullImage: {
        width: '90%',
        height: '90%',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default PhotoGallery;
