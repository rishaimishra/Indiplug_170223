/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
// Screens
import Home from './HomeScreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.greyText,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({ focused, color }) => (
            <SimpleLineIcons
              name="home"
              color={color}
              size={24}
              style={{
                backgroundColor: focused ? '#C4F5F5' : '#fff',
                borderRadius: 70,
                padding: 10,
              }}
            />
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
            height: 60,
          },
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name="user-o"
              color={color}
              size={24}
              style={{
                backgroundColor: focused ? '#C4F5F5' : '#fff',
                borderRadius: 70,
                padding: 10,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
