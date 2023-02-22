import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import MyProfile from '../screens/MyProfie/MyProfile';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabViewScreen from '../screens/TabViewScreen';
import CreateProfile from '../screens/CreateProfile';
import UpdateProfile from '../screens/UpdateProfile';
import RatingScreen from '../screens/RatingScreen';
import PinnedItems from '../screens/PinnedItems';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
import RecievedRequestScreen from '../screens/RecievedRequestScreen/RecievedRequestScreen';
import BookingHistoryScreen from '../screens/BookingHistoryScreen';
import CancellationPolicyScreen from '../screens/CancellationPolicyScreen/CancellationPolicyScreen';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {


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

  async function goBack() {
    await AsyncStorage.removeItem("token");
    navigation.navigate('SignUp')
  //  navigation.navigate('myprofiles')
  }


  function Logout({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('SignUp')} title="Go back home" />
      </View>
    );
  }


  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    style={styles.drawerSection}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#008181',
          width: '90%',
        },
      }}
    >
      {
        !token ? (<>
          <Drawer.Screen name="welcome" component={WelcomeScreen} options={{
            drawerIcon: ({ focused, size }) => (
              <Icon name="table" size={30} color="#fff" />
            ),
          }} />
          <Drawer.Screen name="SignUp" component={TabViewScreen} />
        </>) : (<>
          <Drawer.Screen name="createProfile" component={CreateProfile} />
          <Drawer.Screen name="myprofiles" component={MyProfile} />
          <Drawer.Screen name="updateProfile" component={UpdateProfile} />
          <Drawer.Screen name="ratingScreen" component={RatingScreen} />
          <Drawer.Screen name="addItems" component={PinnedItems} />
          <Drawer.Screen name="recievedRequest" component={RecievedRequestScreen} />
          <Drawer.Screen name="bookingHistory" component={BookingHistoryScreen} />
          <Drawer.Screen name="cancelPolicy" component={CancellationPolicyScreen} />
          <Drawer.Screen name="logout" component={Logout} ></Drawer.Screen>
        </>)
      }
    </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  drawerSection: {
    backgroundColor: 'red',
    paddingTop: 500,
    width: '100%'
  },
})

export default DrawerNavigator