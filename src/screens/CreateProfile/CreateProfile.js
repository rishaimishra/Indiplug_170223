import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import MediaButton from '../../components/MediaButton';
import { Button, Dialog, Portal } from 'react-native-paper';
import Camera from '../../assests/camera.png';
import Plug from '../../assests/plug.png';
import SelectDropdown from 'react-native-select-dropdown';
import arrow from '../../assests/icons/arrow.png';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const CreateProfile = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  useEffect(() => {

    getToken()
  }, [])

  async function getToken() {
    var tkn = await AsyncStorage.getItem(
      "token"
    );
    setToken(tkn)
  }

  const navigation = useNavigation();

  const handlePress = async () => {
    // some logic random the image
    console.warn(token)
    return false
    navigation.navigate('myprofiles')
  }

  const { height } = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in press');
    // login(username, password);

    //validate user
    // navigation.navigate('Home');
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

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  async function logout() {
    // await AsyncStorage.removeItem("token");
    // navigation.navigate('SignUp')
   navigation.navigate('myprofiles')
  }


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
          <Image source={Plug} style={styles.mediaPlug} />
          <Image source={Camera} style={styles.mediaCamera} />
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
          buttonStyle={{ width: '100%', marginTop: 15 }}
          buttonTextStyle={{ textAlign: 'left' }}

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
            labelStyle={{ fontSize: 20 }}>Cancel</Button>
          <Button
            style={styles.footrButtonSave}
            mode="contained"
            onPress={() => handlePress()}
            buttonColor="#008181"
            labelStyle={{ fontSize: 20 }}>Save</Button>
          {/* <Button
            style={styles.footrButtonSave}
            mode="contained"
            onPress={() => logout()}
            buttonColor="#008181"
            labelStyle={{ fontSize: 20 }}>Logout</Button> */}
        </View>
      </View>
      {/* 
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}


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
    // padding: 0
  },
  mediaPlug: {
    // position: 'absolute',
    width: 110,
    height: 112,
    marginLeft: 150,
    // left: '50%',
    // top: '50%',
    // justifyContent: 'space-between',
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
  }

});

export default CreateProfile;
