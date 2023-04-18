import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Loader from '../../../components/Ui/loader';

import Gallery from '../../../components/gallery';
import MusicGallery from '../../../components/musicGallery';
import EventList from '../../../components/calendar';

import styles from './styles';
import images from '../../../constants/images';

import { AuthContext } from '../../../context/AuthContext';

import Header from '../../../components/Shared/Header';

function MyProfile({ navigation }) {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [showTab, setShowTab] = useState(1);

  const { isLoading, fetchProfileDetails } = useContext(AuthContext);

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
    <>
      <Header nav={navigation} menu title="My Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.root}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.mediaButton}>
            <Image
              source={user && user.image ? { uri: user.image } : images.Plug}
              style={userImage ? styles.mediaPlug2 : styles.mediaPlug}
            />
            {/* <Image source={images.Camera} style={styles.mediaCamera} /> */}
            <View style={styles.nameContainer}>
              <Text style={styles.iAmText}>I am</Text>
              <View style={styles.profileName}>
                <Image source={images.pMusic} />
                <Text style={styles.profileNameText}>
                  {user && user.name ? user.name : 'profile name'}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.profileNameTextOuter}>
            {user && user.name ? user.name : 'profile name'}
          </Text>

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

          <Text style={styles.description}>{user && user.bio ? user.bio : 'user bio ...'}</Text>

          <View style={styles.mediaGroupButton}>
            <TouchableOpacity
              style={[styles.tabIcon, showTab === 1 ? styles.tabIconActive : '']} 
              onPress={() => handletab(1)}
            >
              <Image
                source={showTab === 1 ? images.galleryWhite : images.gallery}
                style={styles.tabStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabIcon, showTab === 2 ? styles.tabIconActive : '']}
              onPress={() => handletab(2)}
            >
              <Image
                source={showTab === 2 ? images.music3White : images.music3}
                style={styles.tabStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabIcon, showTab === 3 ? styles.tabIconActive : '']}
              onPress={() => handletab(3)}
            >
              <Image
                source={showTab === 3 ? images.eventWhite : images.eventIcon}
                style={styles.tabStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {showTab === 1 ? <Gallery /> : ''}
            {showTab === 2 ? <MusicGallery /> : ''}
            {showTab === 3 ? <EventList /> : ''}
          </View>
        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </>
  );
}

export default MyProfile;
