import React, { useContext, useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';
import CustomInput from '../../../components/customInput/CustomInput';
import styles from './styles';
import images from '../../../constants/images';
import CameraModal from '../../../components/Ui/cameraMoal';
import { AuthContext } from '../../../context/AuthContext';
import CustomButton from '../../../components/Ui/customButton';

function CreateProfile({ navigation }) {
  const [username, setUsername] = useState();
  const [location, setLocation] = useState();
  const [genre, setGenre] = useState();
  const [bio, setBio] = useState();
  const [userImage, setUserImage] = useState(null);
  const [token, setToken] = useState();
  const [modalShow, setModalShow] = useState(false);

  const { isLoading, createProf } = useContext(AuthContext);

  async function getToken() {
    const tkn = await AsyncStorage.getItem('token');
    setToken(tkn);
  }

  useEffect(() => {
    getToken();
  }, []);

  const handlePress = async () => {
    const body = {
      image: userImage,
      name: username,
      location,
      genre,
      bio,
    };
    const { data } = await createProf(body);
    console.log('data', data);
    // navigation.navigate('myprofiles');
  };

  const onUpload = () => {
    setModalShow(false);
  };

  const countries = ['Action', 'Photography', 'Comedy', 'Painting'];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.root}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalShow(true)} style={styles.mediaButton}>
          <Image
            source={userImage ? { uri: userImage } : images.Plug}
            style={userImage ? styles.mediaPlug2 : styles.mediaPlug}
          />
          <Image source={images.Camera} style={styles.mediaCamera} />
        </TouchableOpacity>
        <CameraModal
          modalShow={modalShow}
          handleUpload={onUpload}
          handleImageChange={(image) => setUserImage(image)}
        />

        <CustomInput placeholder="Your name" value={username} setValue={setUsername} />
        <CustomInput placeholder="Your Location*" value={location} setValue={setLocation} />
        <SelectDropdown
          data={countries}
          buttonStyle={{ width: '100%', marginTop: 15 }}
          buttonTextStyle={{ textAlign: 'left' }}
          onSelect={(selectedItem, index) => {
            setGenre(selectedItem);
          }}
        />
        <CustomInput placeholder="Bio" value={bio} setValue={setBio} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <CustomButton
            style={styles.footrButtonCancel}
            text="Cancel"
            type="CANCEL"
            onPress={() => navigation.navigate('Profile')}
            isLoading={false}
          />
          <CustomButton
            style={styles.footrButtonCancel}
            text="Save"
            type="PRIMARY"
            onPress={handlePress}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateProfile;
