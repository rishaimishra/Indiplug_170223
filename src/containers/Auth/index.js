import React, { useState } from 'react';
import { useWindowDimensions, Image, Text, View, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SignInRoute from './SignInScreen';
import SignUpRoute from './SignUpScreen/SignUpScreen';
import images from '../../constants/images';
import colors from '../../constants/colors';
import styles from './styles';

const renderScene = SceneMap({
  first: SignInRoute,
  second: SignUpRoute,
});

export default function TabViewScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Sign In' },
    { key: 'second', title: 'Sign Up' },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} />
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.titleText}>Welcome</Text>
      <TabView
        lazy
        renderTabBar={(props) => (
          <TabBar
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.tabIndicator}
            renderLabel={({ route, focused }) => (
              <Text style={focused ? styles.tabTitleFocused : styles.tabTitle}>{route.title}</Text>
            )}
          />
        )}
        style={styles.tabView}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}
