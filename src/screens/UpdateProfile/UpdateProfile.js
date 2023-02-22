import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import MediaButton from '../../components/MediaButton';
import {Button} from 'react-native-paper';
import Camera from '../../assests/camera.png';
import Plug from '../../assests/plug.png';
import SelectDropdown from 'react-native-select-dropdown';
import Profile from '../../assests/prof_image.png'
import ProfileIcon from '../../assests/ProfIcon.png'


import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const CreateProfile = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    // console.warn('sign in press');
    // login(username, password);

    //validate user
    navigation.navigate('ratingScreen');
  };

  const onForgotPasswordpress = () => {
    // console.warn("forgot password press");
    // navigation.navigate("NewPassword")
  };
  const OnSignupCC = () => {
    // console.warn("signup press");
    // navigation.navigate("SignUp")
  };

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 25,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View onPress={() => console.log('Pressed')} style={styles.mediaButton}>
                <Image source={Profile} style={styles.mediaImage} />
                <Image source={Camera} style={styles.mediaCamera} />
                <Text style={styles.mediaIAm}>I am</Text>
                <Text style={styles.mediaName}>
                  <Image source={ProfileIcon} style={styles.mediaProfIcon} />
                  Galactic George
                </Text>
            </View>

        <CustomInput
          placeholder="Your Email"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Your Email"
          value={username}
          setValue={setUsername}
        />
        <SelectDropdown
          data={countries}
          buttonStyle={{width: '100%', marginTop: 15}}
          buttonTextStyle={{textAlign: 'left', color: 'grey', fontSize: 12}}
          
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {/* <CustomButton text="Sign In" onPress={onSignInpress} type="SECONDARY" />
                    <CustomButton text="Sign In" onPress={onSignInpress} type="PRIMARY" /> */}
          <Button
            style={styles.footrButtonCancel}
            mode="contained"
            onPress={() => console.log('Pressed')}
            textColor="#444"
            buttonColor="#EBEBEB"
            labelStyle={{fontSize: 20}}>Cancel</Button>
          <Button
            style={styles.footrButtonSave}
            mode="contained"
            onPress={() => onSignInpress()}
            buttonColor="#008181"
            labelStyle={{fontSize: 20}}>Save</Button>
        </View>
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
    width: '100%',
    // marginLeft: 15,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
  },
  mediaPlug: {
    width: 110,
    height: 112,
    marginLeft: 150,
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
  mediaIAm: {
    position: 'absolute',
    left: 'auto',
    top: 150,
    fontSize: 18,
    left: 40,
    color: 'white'
  },
  mediaName: {
    position: 'absolute',
    left: 'auto',
    top: 180,
    fontSize: 20,
    fontWeight: '700',
    left: 28,
    color: 'white'
  },
  footrButtonCancel: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
    fontSize: 50,
    // backgroundColor: '#aaa',
    // color: 'red '
  },
  footrButtonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
  },
  mediaImage: {
    // position: 'absolute',
    width: '100%',
    height: 250,
    margin: 'auto',
    borderRadius: 10,
    // left: '50%',
    // top: '50%',
    justifyContent: 'center',
    // opacity: 0
},
mediaProfIcon:{

}
});

export default CreateProfile;
