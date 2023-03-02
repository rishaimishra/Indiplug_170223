import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../../constants/colors';
import Normalize from '../../helpers/Dimens';
import CustomButton from './customButton';
import images from '../../constants/images';

const { height } = Dimensions.get('window');

function CameraModal({ modalShow, handleUpload, handleImageChange }) {
  const onClickUpload = () => {
    handleUpload();
  };

  const openCamera = async () => {
    // const options = {
    //   saveToPhotos: true,
    //   mediaType: 'photo',
    // };
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera();
      handleImageChange(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    handleImageChange(result.assets[0].uri);
  };

  return (
    <Modal animationType="fade" transparent visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Photo</Text>
          <View style={styles.cameraBtnContainer}>
            <Pressable style={styles.cameraBtn} onPress={openCamera}>
              <Image source={images.Camera} />
              <Text>Take a Photo</Text>
            </Pressable>
            <Pressable style={styles.cameraBtn} onPress={openGallery}>
              <Image source={images.gallery} />
              <Text>Gallery</Text>
            </Pressable>
          </View>
          <CustomButton text="Upload" onPress={onClickUpload} type="PRIMARY" isLoading={false} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: Normalize(18),
    borderTopLeftRadius: Normalize(18),
    padding: Normalize(20),
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
  modalText: {
    textAlign: 'center',
    fontSize: Normalize(16),
    color: colors.dark,
  },
  cameraBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: Normalize(16),
  },
  cameraBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: Normalize(8),
    borderStyle: 'dotted',
    width: '45%',
    height: height / 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CameraModal;
