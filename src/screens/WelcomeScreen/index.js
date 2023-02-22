import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import SplashScreen from '../../assests/welcome.png';
import arrow from '../../assests/icons/arrow.png';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  // const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const navigation = useNavigation();

  const handlePress = () => {
    // some logic random the image
    navigation.navigate('SignUp')
 }
  return (
    <View style={styles.page}>
      {/* <TouchableOpacity onPress={handlePress}>
        <Image source={arrow} style={styles.arrow} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image source={arrow} style={styles.arrowLeft} />
      </TouchableOpacity> */}

      <Image source={SplashScreen} style={styles.splashScreen} />
      {/* <Image source={Logo} style={styles.logo} resizeMode="contain" /> */}

      {/* <Spinner visible={isLoaded} /> */}
      {/* <Spinner visible={isLoading} /> */}
      {/* <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home welcome {userInfo.data.name}</Text> */}
      {/* <CustomButton 
                    text="Logout" 
                    onPress={OnResendPress} 
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                     /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: '#000',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    margin: 0,
  },
  splashScreen: {
    marginLeft: 70,
    width: '70%',
    maxWidth: 200,
    resizeMode: 'contain',
  },
  arrow: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20
  },
  arrowLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg'}]
  },
});
export default WelcomeScreen;
