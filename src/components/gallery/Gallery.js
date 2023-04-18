import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Post from '../../assests/images/post.png';
import images from '../../constants/images';
import Normalize from '../../helpers/Dimens';
import CustomButton from '../Ui/customButton';
import colors from '../../constants/colors';
import CameraModal from '../cameraMoal';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

function Gallery() {
  const [list, setList] = useState([Post, Post, Post, Post]);
  const [modalShow, setModalShow] = useState(false);
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onUpload = () => {
    setModalShow(!modalShow);
  };
  const onImageUpload = () => {
    setModalShow(!modalShow);
  };
  const setUserImage = (img) => {
    const arr = [];
    arr.push(img);
    setList(arr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.galleryContainer}>
        {list.map((image, i) => (
          <TouchableOpacity key={`g=-${i}`}>
            <Image key={`key-${i + 1}`} source={image} style={styles.galleryImage} />
          </TouchableOpacity>
        ))}
      </View>

      {list.length === 0 && (
        <View style={styles.uploadContainer}>
          <Image source={images.UploadIcon} style={styles.networkCloud} />
          <Text style={styles.cloudText}>You have not updated any photo yet</Text>
          <CustomButton text="Upload Your First Photo" onPress={onImageUpload} type="UPLOAD" />
        </View>
      )}
      <CameraModal
        modalShow={modalShow}
        handleUpload={onUpload}
        handleImageChange={(image) => setUserImage(image)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: Normalize(8),
  },
  galleryImage: {
    marginBottom: Normalize(10),
    borderRadius: Normalize(8),
    width: Normalize(90),
    height: Normalize(90),
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

export default Gallery;
