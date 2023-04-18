/* eslint-disable react/prop-types */
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import images from '../../constants/images';
import Normalize from '../../helpers/Dimens';

export default function Header({ nav, back, menu, cart, chat, title }) {
  return (
    <View style={styles.container}>
      {menu && (
        <Pressable style={styles.headerBtn} onPress={() => nav.openDrawer()}>
          <Image source={images.menu} />
        </Pressable>
      )}
      {back && (
        <Pressable style={styles.headerBtn} onPress={() => nav.goBack()}>
          <Image source={images.arrowLeft} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightBtnContainer}>
        {cart && (
          <Pressable style={styles.rightBtn} onPress={() => nav.openDrawer()}>
            <Image source={images.shoppingCart} />
          </Pressable>
        )}
        {chat && (
          <Pressable style={styles.rightBtn} onPress={() => nav.navigate('ChatList')}>
            <Image source={images.chat} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Normalize(15),
    backgroundColor: colors.white,
    position: 'relative',
  },
  headerBtn: {
    position: 'absolute',
    left: '4%',
    padding: 5,
  },
  rightBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: '5%',
  },
  rightBtn: {
    padding: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: Normalize(14),
    color: colors.dark,
  },
});
