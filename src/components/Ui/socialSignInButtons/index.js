import React, { useEffect } from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
import images from '../../../constants/images';
import Normalize from '../../../helpers/Dimens';

function SocialSignIn() {
  const navigation = useNavigation();
  const reset = (name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(resetAction);
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '386608697073-0nrlse2jrv5l6nilbvupeh5dc0eprjlv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const onSigninGooglepress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo.user);
      Toast.showWithGravity('Google Sign in successfull.', Toast.SHORT, Toast.TOP);
      // reset('Home');
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <Pressable onPress={onSigninGooglepress}>
      <Image source={images.google} style={styles.googleImage} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  googleImage: {
    marginVertical: Normalize(5),
    width: Normalize(24),
    height: Normalize(24),
  },
});

export default SocialSignIn;
