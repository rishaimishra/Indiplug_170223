import React from 'react';
import { Modal, StyleSheet, View, Dimensions } from 'react-native';
import { Text, Heading, HStack, Image, Pressable } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';
import Normalize from '../helpers/Dimens';
import images from '../constants/images';

const { height } = Dimensions.get('window');

function CameraModal({ modalShow, handleUpload }) {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('AddEvent');
    handleUpload();
  };

  return (
    <Modal animationType="fade" transparent visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Heading fontSize="md" alignSelf="center" mb="4">
            Create New
          </Heading>
          <Pressable onPress={onClick}>
            <HStack alignItems="center" py="2" mb="2">
              <Image source={images.galleryGray} alt="gallery icon" />
              <Text ml="2">Photo/Video</Text>
            </HStack>
          </Pressable>
          <Pressable onPress={onClick}>
            <HStack alignItems="center" py="2" mb="2">
              <Image source={images.musicGray} alt="music icon" />
              <Text ml="2">Audio</Text>
            </HStack>
          </Pressable>
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
