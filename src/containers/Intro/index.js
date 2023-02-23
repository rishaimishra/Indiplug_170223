import { View, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
// assets
import colors from '../../constants/colors';
import images from '../../constants/images';

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      reset('Auth');
    }, 3000);
  });

  const reset = (name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.black} />
      <View style={styles.page}>
        <Image source={images.splash} style={styles.splashScreen} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
  },
  splashScreen: {
    maxWidth: 200,
    resizeMode: 'contain',
    width: '100%',
  },
});
export default WelcomeScreen;
