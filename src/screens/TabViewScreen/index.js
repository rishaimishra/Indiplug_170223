import React, { useContext, useState } from 'react';
import { View, useWindowDimensions, Image, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar, TabIndicator } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assests/logo.png';
import SignInRoute from '../SignInScreen/SignInScreen';
import SignUpRoute from '../SignUpScreen/SignUpScreen';
import arrow from '../../assests/icons/arrow.png';

const renderScene = SceneMap({
  first: SignInRoute,
  second: SignUpRoute,
});

export default function TabViewScreen() {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Sign In' },
    { key: 'second', title: 'Sign Up' },
  ]);

  return (
    <>
      <Image source={Logo} style={styles.logoStyle} />
      <Text style={styles.titleText}>Welcome</Text>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: '#fff', color: '#aaa' }}
            indicatorStyle={{ backgroundColor: '#008181', height: 3 }}
            // indicatorContainerStyle={{ backgroundColor: '#fff', borderBottomColor: '#fff' }}
            renderLabel={({ route, focused, color }) => (
              <Text style={styles.tabTitle}>{route.title}</Text>
            )}
          />
        )}
        style={styles.tabStyle}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}

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
  logoStyle: {
    marginLeft: 30,
    marginTop: 50,
    width: 130,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 43,
    color: '#000',
    marginLeft: 30,
    fontWeight: '400',
    // marginBottom: 100,
    height: 110,
  },
  tabStyle: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  tabTitle: {
    margin: 8,
    fontSize: 20,
    color: 'rgba(0,0,0,90%)',
  },
  TabIndicatorColor: {
    color: 'black',
  },
});
