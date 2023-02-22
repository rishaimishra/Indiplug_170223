import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import MediaButton from '../../components/MediaButton';
import {Button} from 'react-native-paper';
import Camera from '../../assests/camera.png';
import Plug from '../../assests/plug.png';
import Profile from '../../assests/prof_image.png';
import RatingIcon from '../../assests/icons/rating.png';
import CalendarIcon from '../../assests/icons/calendar.png';
import ImageIcon from '../../assests/icons/ImageIcon.png';
import MarketIcon from '../../assests/icons/market.png';
import MusicIcon from '../../assests/icons/musicIcon.png';
import UploadIcon from '../../assests/icons/uploadIcon.png';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {TabView, SceneMap, TabBar, TabIndicator} from 'react-native-tab-view';

import GalleryRoute from '../../components/galleryIcon/GalleryIcon';
import MusicRoute from '../../components/MusicIcon/MusicIcon';
import CalendarRoute from '../../components/CalendarIcon/CalendarIcon';

import {useNavigation} from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const MyProfile = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  

  const [showTab, setShowTab] = useState(1);

  const {height} = useWindowDimensions();
  // const renderScene = SceneMap({
  //   first: GalleryRoute,
  //   second: MusicRoute,
  //   third: CalendarRoute,
  // });

  // const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first'},
    {key: 'second'},
    {key: 'third'},
  ]);

  const renderLabel = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Image source={ImageIcon} />;
      case 'second':
        return <Image source={MusicIcon} />;
      case 'third':
        return <Image source={CalendarIcon} />;
      default:
        return null;
    }
  };
  const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in press');
    // login(username, password);

    //validate user
    navigation.navigate('updateProfile');
  };
  const galleryView = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in presskkk');
    <GalleryRoute />;
    // login(username, password);

    //validate user
    navigation.navigate('updateProfile');
  };

  const onForgotPasswordpress = () => {
    // console.warn("forgot password press");
    // navigation.navigate("NewPassword")
  };
  const OnSignupCC = () => {
    // console.warn("signup press");
    // navigation.navigate("SignUp")
  };

  const handletab = e => {
    setShowTab(e);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#fff', paddingTop: 25}}>
        <View onPress={() => console.log('Pressed')} style={styles.mediaButton}>
          <Image source={Profile} style={styles.mediaImage} />
          <Image source={Camera} style={styles.mediaCamera} />
        </View>
        <Text style={styles.profileName}>Galactic George</Text>
        <View style={styles.ratingMain}>
          <Image source={RatingIcon} style={styles.ratingIcon} />
          <Image source={RatingIcon} style={styles.ratingIcon} />
          <Image source={RatingIcon} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>4.7 (21 reviews)</Text>
        </View>
        <Text style={styles.address}>L.A. Uniked States</Text>
        <View style={styles.followerMain}>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>22K</Text>
            <Text style={styles.followerTitle}>folower</Text>
          </View>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>22K</Text>
            <Text style={styles.followerTitle}>folower</Text>
          </View>
          <View style={styles.followerEach}>
            <Text style={styles.followerNo}>22K</Text>
            <Text style={styles.followerTitle}>folower</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Musician, Singer, Singing Artist Works of art make rules, rules do not
          make works of art
        </Text>

        {/* <View style={{flex :2, flexDirection: "row", justifyContent: 'center', margin: 15 }}> */}

        <View style={styles.mediaGroupButton}>
          <TouchableOpacity onPress={() => handletab(1)}>
          <Image source={ImageIcon} style={styles.tabStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handletab(2)}>
          <Image source={MusicIcon} style={styles.tabStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handletab(3)}>
          <Image source={CalendarIcon} style={styles.tabStyle} />
          </TouchableOpacity>
         

        {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: 15,
          }}> */}
          {/* <Button
            style={styles.tabbtn}
            mode="contained"
            onPress={() => handletab(1)}
            buttonColor="#DEFFFC"
            labelStyle={{fontSize: 20}}>
            <Image source={ImageIcon} style={styles.tabimg} />
          </Button>
          <Button
            style={styles.tabbtn}
            mode="contained"
            onPress={() => handletab(2)}
            buttonColor="#DEFFFC"
            labelStyle={{fontSize: 20}}>
            <Image source={MusicIcon} />
          </Button>
          <Button
            style={styles.tabbtn}
            mode="contained"
            onPress={() => handletab(3)}
            buttonColor="#DEFFFC"
            labelStyle={{fontSize: 20}}>
            <Image source={CalendarIcon} />
          </Button> */}
         

          {/* <TabView
            renderTabBar={props => (
              <TabBar
                {...props}
                style={{backgroundColor: '#fff', color: '#aaa'}}
                indicatorStyle={{backgroundColor: '#008181', height: 3}}
                indicatorContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomColor: '#fff',
                }}
                renderLabel={renderLabel}
              />
            )}
            style={styles.tabStyle}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          /> */}
        </View>

        <View>
          {showTab === 1 ? <GalleryRoute /> : ''}
          {showTab === 2 ? <MusicRoute /> : ''}
          {showTab === 3 ? <CalendarRoute /> : ''}
        </View>

        {/* {galleryShow ? <GalleryRoute /> : null}
        {musicShow ? <MusicRoute /> : null} 
        {calendarShow ? <CalendarRoute /> : null} */}

        {/* <GalleryRoute /> */}

        <Image source={UploadIcon} style={styles.networkCloud} />

        <Text style={styles.cloudText}>fadsfasdf asdf asd f a sdf as dfa</Text>

        <CustomButton
          text="Upload Your First Photo"
          onPress={onSignInpress}
          type="UPLOAD"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  OrStyle: {
    fontSize: 14,
    color: '#929292',
    textAlign: 'center',
  },
  mediaButton: {
    height: 250,
    width: 380,
    marginLeft: 15,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    // padding: 0
  },
  tabbtn: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    // width: '23%',
    marginTop: 20,
    borderRadius: 200,
  },
  tabimg: {
    width: 50,
  },
  newTabButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
  },
  mediaImage: {
    // position: 'absolute',
    width: 380,
    height: 250,
    margin: 'auto',
    borderRadius: 10,
    // left: '50%',
    // top: '50%',
    justifyContent: 'center',
    // opacity: 0
  },
  mediaCamera: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 'auto',
    top: 'auto',
    right: 20,
    bottom: 20,
  },
  profileName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  ratingMain: {
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
  },
  ratingIcon: {
    marginRight: 5,
  },
  ratingText: {},
  address: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
    marginTop: '2%',
  },
  followerMain: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followerEach: {},
  followerNo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  followerTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },
  mediaGroupButton: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 90,
    marginRight: 90,
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  networkCloud: {
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '40%',
    marginBottom: 20,
    marginTop: '4%',
  },
  cloudText: {
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '2%',
  },
});

export default MyProfile;
