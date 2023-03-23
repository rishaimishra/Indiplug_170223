/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import images from '../../constants/images';
import Normalize from '../../helpers/Dimens';
import colors from '../../constants/colors';
import { AuthContext } from '../../context/AuthContext';

function CustomDrawer({ navigation }) {
  const { logout } = useContext(AuthContext);
  const drawers = [
    {
      id: 1,
      name: 'Create Profile',
      route: 'Create',
      icon: images.profile,
    },
    {
      id: 2,
      name: 'Profile',
      route: 'Profile',
      icon: images.profile,
    },
  ];

  return (
    <View style={styles.drawerContainer}>
      <Image source={images.logoWhite} style={styles.logo} />
      <View style={styles.hr} />
      <DrawerContentScrollView>
        {drawers.map((item) => (
          <DrawerItem
            key={item.id}
            style={styles.labelStyle}
            label={() => (
              <View style={styles.drawerMenu}>
                <Image source={item.icon} />
                <Text style={styles.drawerMenuName}>{item.name}</Text>
              </View>
            )}
            onPress={() => {
              navigation.navigate(item.route);
            }}
          />
        ))}
        <DrawerItem
          style={styles.labelStyle}
          label={() => (
            <Pressable style={styles.drawerMenu} onPress={logout}>
              <Image source={images.logout} />
              <Text style={styles.drawerMenuName}>Logout</Text>
            </Pressable>
          )}
          onPress={() => {
            navigation.navigate(item.route);
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    padding: 0,
    margin: 0,
  },
  drawerContainer: {
    flex: 1,
    paddingVertical: Normalize(30),
  },
  logo: {
    marginLeft: Normalize(15),
  },
  hr: {
    borderWidth: 0.6,
    borderColor: colors.lightGrey,
    marginTop: Normalize(20),
    marginBottom: Normalize(10),
  },
  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerMenuName: {
    color: colors.white,
    fontSize: Normalize(14),
    marginLeft: Normalize(5),
  },
});

export default CustomDrawer;
