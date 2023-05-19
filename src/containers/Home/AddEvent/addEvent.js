import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Box,
  Text,
  ScrollView,
  Image,
  Input,
  Pressable,
  TextArea,
  HStack,
  Button,
} from 'native-base';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker, { types } from 'react-native-document-picker';

import Header from '../../../components/Shared/Header';
import colors from '../../../constants/colors';
import images from '../../../constants/images';
import Normalize from '../../../helpers/Dimens';

const { height } = Dimensions.get('window');

export default function AddEvent({ navigation }) {
  // const openCamera = async () => {
  //   // const options = {
  //   //   saveToPhotos: true,
  //   //   mediaType: 'photo',
  //   // };
  //   const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     const result = await launchCamera();
  //     console.log(result.assets[0].uri);
  //   }
  // };

  const openGallery = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);
    console.log(result.assets[0].uri);
  };

  const onMusicUpload = async () => {
    const options = {
      allowMultiSelection: true,
      type: types.audio,
    };
    try {
      const pickerResult = await DocumentPicker.pickMultiple(options);
      console.log(pickerResult);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box bg="white" flex={1}>
      <Header nav={navigation} title="Add New Event" back />
      <ScrollView px="6">
        <Box style={styles.cameraBtnContainer}>
          <Pressable style={styles.cameraBtn} onPress={openGallery}>
            <Image source={images.cameraGreen} />
            <Text>Add Photo/Video</Text>
          </Pressable>
          <Pressable style={styles.cameraBtn} onPress={onMusicUpload}>
            <Image source={images.musicGreen} />
            <Text>Add Audio</Text>
          </Pressable>
        </Box>
        <Box>
          <Input
            mb="4"
            h="12"
            variant="filled"
            placeholder="Add Title"
            borderRadius="lg"
            bg="dark.700"
          />
          <HStack alignItems="center" justifyContent="space-between" mb="4">
            <Pressable bg="dark.700" h="12" borderRadius="lg" w="48%" justifyContent="center">
              <Text fontSize="xs" color="dark.500" ml="4">
                Start Date
              </Text>
            </Pressable>
            <Pressable bg="dark.700" h="12" borderRadius="lg" w="48%" justifyContent="center">
              <Text fontSize="xs" color="dark.500" ml="4">
                Time
              </Text>
            </Pressable>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between" mb="4">
            <Pressable bg="dark.700" h="12" borderRadius="lg" w="48%" justifyContent="center">
              <Text fontSize="xs" color="dark.500" ml="4">
                End Date
              </Text>
            </Pressable>
            <Pressable bg="dark.700" h="12" borderRadius="lg" w="48%" justifyContent="center">
              <Text fontSize="xs" color="dark.500" ml="4">
                Time
              </Text>
            </Pressable>
          </HStack>
          <Input
            mb="4"
            variant="filled"
            placeholder="Add Location"
            borderRadius="lg"
            bg="dark.700"
            h="12"
          />
          <TextArea
            mb="4"
            variant="filled"
            placeholder="Add Description"
            borderRadius="lg"
            bg="dark.700"
          />
        </Box>
      </ScrollView>
      <HStack alignItems="center" px="6" mb="10%">
        <Button
          colorScheme="darkText"
          bg={colors.lightGrey}
          flex={1}
          borderRadius="lg"
          h="12"
          mr="2"
        >
          <Text color="dark.400">Cancel</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('EventSuccess')}
          bg={colors.primary}
          flex={1}
          borderRadius="lg"
          h="12"
          ml="2"
        >
          Save
        </Button>
      </HStack>
    </Box>
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
    borderRadius: Normalize(10),
    borderStyle: 'dotted',
    width: '40%',
    height: height / 6,
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
