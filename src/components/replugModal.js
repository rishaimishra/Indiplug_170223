import React from 'react';
import { Modal, StyleSheet, View, Image } from 'react-native';
import { Text, Pressable } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Normalize from '../helpers/Dimens';
import images from '../constants/images';

function ReplugModal({ modalShow, onCloseModal, onPressReplug, onPressQuotePlug }) {
  return (
    <Modal animationType="fade" transparent visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.btnContainer}>
            <Pressable position="absolute" right="2" onPress={onCloseModal} style={{ zIndex: 1 }}>
              <AntDesign name="close" style={styles.closeIcon} />
            </Pressable>
            <Pressable py="4" mb="2" style={styles.replugBtn} onPress={onPressReplug}>
              <Image source={images.replug} />
              <Text ml="2">RePlug</Text>
            </Pressable>
            <Pressable py="4" mb="2" style={styles.replugBtn} onPress={onPressQuotePlug}>
              <Image source={images.replug} />
              <Text ml="2">Quote Plug</Text>
            </Pressable>
          </View>
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
  closeIcon: {
    fontSize: Normalize(16),
  },
  btnContainer: {
    width: '100%',
    paddingBottom: Normalize(20),
  },
  replugBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReplugModal;
