import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DocumentPicker, { isInProgress, types } from 'react-native-document-picker';
import MusicMoreModal from '../musicMoreModal';

import images from '../../constants/images';
import colors from '../../constants/colors';
import Normalize from '../../helpers/Dimens';

import MusicModal from '../musicPlayerModal';
import CustomButton from '../Ui/customButton';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

function Music() {
  const [musicList, setMusicList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [moreModal, setMoreModal] = useState(false);
  const [music, setMusic] = useState('');

  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const handleError = (err) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered');
    } else {
      throw err;
    }
  };

  const onMusicUpload = async () => {
    const options = {
      allowMultiSelection: true,
      type: types.audio,
    };
    try {
      const pickerResult = await DocumentPicker.pickMultiple(options);
      setMusicList(pickerResult);
    } catch (e) {
      handleError(e);
    }
  };

  const playMusic = (data) => {
    setMusic(data);
    setDisplay(!display);
  };

  return (
    <View>
      {musicList.map((file, i) => (
        <TouchableOpacity
          key={`music-${i + 1}`}
          style={styles.container}
          onPress={() => playMusic(file)}
        >
          <View style={styles.row}>
            <Image source={images.musicIcon} style={styles.musicIcon} />
            <View>
              <Text style={styles.trackName}>Run the world</Text>
              <Text style={styles.trackDuration}>0:60</Text>
              <View style={[styles.socialIconContainer, styles.row]}>
                <TouchableOpacity style={styles.iconBtn}>
                  <Image source={images.sound} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <Image source={images.spotify} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <Image source={images.music2} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.iconBtn}>
              <Image source={images.headphone} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => setMoreModal(!moreModal)}>
              <Image source={images.more} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <MusicMoreModal modalShow={moreModal} handleUpload={() => setMoreModal(!moreModal)} />
        </TouchableOpacity>
      ))}
      <MusicModal modalShow={display} data={music} handleClose={() => setDisplay(!display)} />
      {musicList.length === 0 && (
        <View style={styles.uploadContainer}>
          <Image source={images.UploadIcon} style={styles.networkCloud} />
          <Text style={styles.cloudText}>You have not updated any photo yet</Text>
          <CustomButton text="Upload Your First Music" onPress={onMusicUpload} type="UPLOAD" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgLightBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Normalize(10),
    marginBottom: Normalize(10),
  },
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
    color: colors.greyText,
    marginBottom: Normalize(5),
  },
  trackDuration: {
    fontSize: Normalize(12),
    color: colors.greyText2,
    marginBottom: Normalize(5),
  },
  socialIconContainer: {},
  iconBtn: {
    padding: Normalize(5),
  },
  socialIcon: {
    height: Normalize(20),
    weight: Normalize(40),
    resizeMode: 'contain',
  },
  uploadContainer: {
    alignItems: 'center',
    marginVertical: Normalize(10),
  },
  networkCloud: {
    marginBottom: Normalize(5),
  },
  cloudText: {
    marginBottom: Normalize(5),
    color: colors.greyText2,
  },
});

export default Music;
