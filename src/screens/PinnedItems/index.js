import React, { useContext, useState } from 'react'
import { View, useWindowDimensions, Image, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar, TabIndicator } from 'react-native-tab-view';
import Logo from '../../assests/logo.png'
import PostRoute from '../PostScreen/PostScreen'
import AudioRoute from '../AudioScreen/AudioScreen'
import EventRoute from '../EventScreen/EventScreen'
import ProductRoute from '../ProductScreen/ProductScreen'




const renderScene = SceneMap({
  first: PostRoute,
  second: AudioRoute,
  // third: ProductRoute,
  fourth: EventRoute,
});

export default function PinnedItems() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Post' },
    { key: 'second', title: 'Audios' },
    // { key: 'third', title: 'Products' },
    { key: 'fourth', title: 'Events' },
  ]);

  return (
    <>
      {/* <Image source={Logo} style={styles.logoStyle} />
      <Text style={styles.titleText}>Welcome</Text> */}
      <TabView

        renderTabBar={props => 
        <TabBar 
        {...props} 
        style={{backgroundColor: '#fff', color: '#aaa'}}
        indicatorStyle={{ backgroundColor: '#008181',height:3 }}
        // indicatorContainerStyle={{ backgroundColor: '#fff', borderBottomColor: '#fff' }}
        renderLabel={({ route, focused, color }) => (
          <Text style={styles.tabTitle}>
            {route.title}
          </Text>
        )}
        />
        }
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
  page:{
    padding: 0,
    backgroundColor: '#000',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    margin: 0
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
    height: 110
  },
  tabStyle:{
    marginLeft: 30,
    marginRight: 30
  },
  tabTitle:{
    margin: 8,
    fontSize: 12,
    color: 'rgba(0,0,0,90%)'
  },
  TabIndicatorColor:{
    color: 'black'
  }
})