import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const apiUrl = 'https://nu1ku3c2d2.execute-api.ap-northeast-1.amazonaws.com/v1/photoGallery';

      try {
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);
        if (response.data && response.data.body) {
          const body = JSON.parse(response.data.body);
          console.log('Parsed Images:', body.images);
          if (Array.isArray(body.images)) {
            setImages(body.images);
          }
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageGrid}>
        {Array.isArray(images) && images.length > 0 ? (
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
              resizeMode="contain"
            />
          ))
        ) : (
          <Text>No images found</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
});

export default PhotoGallery;
