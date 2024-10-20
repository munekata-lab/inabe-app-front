import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Linking } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRouter } from "expo-router";

export default function QRScanner({ scanQRCode }) {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const openUrl = (data: string) => {
    const url = data;
    Linking.openURL(url);
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }} onBarcodeScanned={({ type, data }) => {
        openUrl(data);
        console.log(data);
      }} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => scanQRCode()}
              title="ホームへ戻る"
              color="pink"
            />
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});