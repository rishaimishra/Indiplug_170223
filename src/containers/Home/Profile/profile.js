import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/Ui/customButton';
import Loader from '../../../components/Ui/loader';

import GalleryRoute from '../../../components/galleryIcon/GalleryIcon';
import MusicRoute from '../../../components/MusicIcon/MusicIcon';
import CalendarRoute from '../../../components/CalendarIcon/CalendarIcon';

import styles from './styles';
import images from '../../../constants/images';

import { AuthContext } from '../../../context/AuthContext';

function MyProfile() {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [showTab, setShowTab] = useState(1);

  const { isLoading, fetchProfileDetails } = useContext(AuthContext);

  const onUpload = () => {
    console.warn('sign in press');
  };

  const handletab = (e) => {
    setShowTab(e);
  };

  const fetchProfile = async () => {
    const res = await fetchProfileDetails();
    console.log('res', res);
    setUser(res.data.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return <Loader />;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.root}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.mediaButton}>
          <Image
            source={user.image ? { uri: user.image } : images.Plug}
            style={userImage ? styles.mediaPlug2 : styles.mediaPlug}
          />
          {/* <Image source={images.Camera} style={styles.mediaCamera} /> */}
          <View style={styles.nameContainer}>
            <Text style={styles.iAmText}>I am</Text>
            <View style={styles.profileName}>
              <Image source={images.pMusic} />
              <Text style={styles.profileNameText}>{user.name ? user.name : 'profile name'}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.profileNameTextOuter}>{user.name ? user.name : 'profile name'}</Text>

        <View style={styles.ratingMain}>
          <Image source={images.RatingIcon} style={styles.ratingIcon} />
          <Image source={images.RatingIcon} style={styles.ratingIcon} />
          <Image source={images.RatingIcon} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>4.7 (21 reviews)</Text>
        </View>

        <Text style={styles.address}>L.A. Uniked States</Text>

        <View style={styles.followerMain}>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>22K</Text>
            <Text style={styles.followerTitle}>Followers</Text>
          </View>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>180</Text>
            <Text style={styles.followerTitle}>Pins</Text>
          </View>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>2.2K</Text>
            <Text style={styles.followerTitle}>Following</Text>
          </View>
        </View>

        <Text style={styles.description}>{user.bio ? user.bio : 'user bio ...'}</Text>

        <View style={styles.mediaGroupButton}>
          <TouchableOpacity onPress={() => handletab(1)}>
            <Image source={images.ImageIcon} style={styles.tabStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handletab(2)}>
            <Image source={images.MusicIcon} style={styles.tabStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handletab(3)}>
            <Image source={images.MarketIcon} style={styles.tabStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handletab(4)}>
            <Image source={images.CalendarIcon} style={styles.tabStyle} />
          </TouchableOpacity>
        </View>

        {/* <View>
            {showTab === 1 ? <GalleryRoute /> : ''}
            {showTab === 2 ? <MusicRoute /> : ''}
            {showTab === 3 ? <CalendarRoute /> : ''}
          </View> */}

        <View style={styles.uploadContainer}>
          <Image source={images.UploadIcon} style={styles.networkCloud} />
          <Text style={styles.cloudText}>You have not updated any photo yet</Text>
          <CustomButton text="Upload Your First Photo" onPress={onUpload} type="UPLOAD" />
        </View>
      </View>
    </ScrollView>
  );
}

export default MyProfile;
