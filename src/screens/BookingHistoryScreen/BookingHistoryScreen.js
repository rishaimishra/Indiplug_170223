import { View, useWindowDimensions, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar, TabIndicator } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import BookingAccept from '../RecievedRequestScreen'
import BookingDeclined from './BookingDeclined'

const renderScene = SceneMap({
  first: BookingAccept,
  second: BookingDeclined,
});


const BookingHistoryScreen = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Accept' },
    { key: 'second', title: 'Declined' },
  ]);


  return (
    <>
      <TabView
        renderTabBar={props =>
          <TabBar
            {...props}
            style={{ backgroundColor: '#fff', color: '#aaa' }}
            indicatorStyle={{ backgroundColor: '#008181', height: 3 }}
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
  )
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
  tabStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  tabTitle: {
    margin: 8,
    fontSize: 20,
    color: 'rgba(0,0,0,90%)'
  },
  TabIndicatorColor: {
    color: 'black'
  },
})


export default BookingHistoryScreen