import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react'
import CreateProfile from '../screens/CreateProfile'
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const CustomDrawer = (props) => {

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


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
        {
          !token ? (<>
            <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Welcome</Text>)}
            onPress={() => {
              props.navigation.navigate('welcome');
            }}
          />
            <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>SignUp</Text>)}
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}
          />
          </>):(<>
            <DrawerItem
            // label='Create'
            // focused={getActiveRouteState(
            //   props.state.routes,
            //   props.state.index,
            //   'Home'
            // )}

            // icon={({ color, size }) => <Icon name="rocket" size={30} color="#900" />}
            label={() => (<Text style={styles.drawerMenu}>Create</Text>)}
            onPress={() => {
              props.navigation.navigate('createProfile');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Profile</Text>)}
            onPress={() => {
              props.navigation.navigate('myprofiles');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Update Profile</Text>)}
            onPress={() => {
              props.navigation.navigate('updateProfile');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Rating Screen</Text>)}
            onPress={() => {
              props.navigation.navigate('ratingScreen');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Pinned Items</Text>)}
            onPress={() => {
              props.navigation.navigate('addItems');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Recieved Request</Text>)}
            onPress={() => {
              props.navigation.navigate('recievedRequest');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Booking History</Text>)}
            onPress={() => {
              props.navigation.navigate('bookingHistory');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Cancel Policy</Text>)}
            onPress={() => {
              props.navigation.navigate('cancelPolicy');
            }}
          />
          <DrawerItem
            label={() => (<Text style={styles.drawerMenu}>Logout</Text>)}
            onPress={async () => {
              await AsyncStorage.removeItem("token");
              // navigation.navigate('SignUp')
              navigation.navigate('myprofiles')
            }}
          />
          </>)
        }
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  drawerMenu: {
    color: '#fff',
    fontSize: 18
  },
})


export default CustomDrawer