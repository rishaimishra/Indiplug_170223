/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../../constants/images';
// Screens
import Home from './HomeScreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            // height: 60,
          },
          tabBarIcon: ({ size, focused, color }) => (
            <Image style={{ width: size, height: size }} source={images.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            // height: 60,
          },
          tabBarIcon: ({ size, focused, color }) => (
            <Image style={{ width: size, height: size }} source={images.profileActive} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
