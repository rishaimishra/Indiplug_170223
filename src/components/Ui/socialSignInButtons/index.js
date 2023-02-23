import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import images from '../../../constants/images';
import Normalize from '../../../helpers/Dimens';

function SocialSignIn() {
  const onSigninGooglepress = () => {
    console.warn('Google press');
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
