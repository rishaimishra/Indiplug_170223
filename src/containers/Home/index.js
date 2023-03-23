import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
// Screens
import CreateProfile from './CreateProfile';
import BottomNav from './BottomNavHome';

import colors from '../../constants/colors';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.primary,
            width: '80%',
          },
        }}
      >
        <Drawer.Screen name="Create" component={CreateProfile} options={{ headerShown: false }} />
        <Drawer.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </>
  );
}
