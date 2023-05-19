import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import Sound from 'react-native-sound';
import colors from '../constants/colors';
import Normalize from '../helpers/Dimens';
import images from '../constants/images';

function MusicModal({ modalShow, handleClose, data }) {
  Sound.setCategory('Playback');

  const [musicTrack, setMusicTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    const track = new Sound(
      'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        // console.log(
        //   `duration in seconds: ${track.getDuration()}number of channels: ${track.getNumberOfChannels()}`
        // );
        track.play();
        setIsPlaying(true);
        setMusicTrack(track);
      }
    );
  };
  const onPause = () => {
    musicTrack.stop();
    setIsPlaying(false);
  };

  return (
    <Modal animationType="fade" transparent visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeBtn} onPress={handleClose}>
            <Image source={images.close} style={styles.closeIcon} />
          </Pressable>
          <View style={styles.row}>
            <Image source={images.musicIcon} style={styles.musicIcon} />
            <View>
              <Text style={styles.trackName}>Run the world</Text>
              <Text style={styles.trackDuration}>
                {musicTrack && musicTrack.getDuration() > 0 ? musicTrack.getDuration() : ''}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            {isPlaying ? (
              <TouchableOpacity style={styles.iconBtn} onPress={onPause}>
                <Image source={images.pause} style={styles.socialIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.iconBtn} onPress={onPlay}>
                <Image source={images.play} style={styles.socialIcon} />
              </TouchableOpacity>
            )}
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
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Normalize(20),
    borderTopLeftRadius: Normalize(18),
    borderTopRightRadius: Normalize(18),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  closeBtn: {
    padding: Normalize(5),
    position: 'absolute',
    top: '10%',
    right: '5%',
  },
  closeIcon: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicIcon: {
    height: Normalize(50),
    weight: Normalize(50),
    marginRight: Normalize(10),
    resizeMode: 'contain',
  },
  trackName: {
    fontSize: Normalize(12),
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: Normalize(5),
  },
  trackDuration: {
    fontSize: Normalize(12),
    color: colors.white,
    marginBottom: Normalize(5),
  },
  iconBtn: {
    padding: Normalize(5),
  },
  socialIcon: {
    height: Normalize(20),
    weight: Normalize(40),
    resizeMode: 'contain',
  },
});

export default MusicModal;
