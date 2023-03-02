import { View, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// assets
import colors from '../../constants/colors';
import images from '../../constants/images';

function WelcomeScreen({ navigation }) {
  async function initialize() {
    const tkn = await AsyncStorage.getItem('token');
    if (tkn) {
      reset('Home');
    } else {
      reset('Auth');
    }
  }

  const reset = (name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(resetAction);
  };
  useEffect(() => {
    setTimeout(() => {
      initialize();
    }, 3000);
  });

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
