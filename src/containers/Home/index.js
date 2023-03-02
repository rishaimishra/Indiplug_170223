import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

import CreateProfile from './CreateProfile';
import Profile from './Profile';

import colors from '../../constants/colors';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        style={styles.drawerSection}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.primary,
            width: '90%',
          },
        }}
      >
        <Drawer.Screen name="Create" component={CreateProfile} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  drawerSection: {
    backgroundColor: 'red',
    paddingTop: 500,
    width: '100%',
  },
});
