import React, { useState } from 'react';
import { Box, Pressable } from 'native-base';
import { Dimensions, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import colors from '../../../constants/colors';

export default function TabBar({ routes, scenes }) {
  const [index, setIndex] = useState(0);

  const initialLayout = {
    width: Dimensions.get('window').width,
  };

  const renderScene = SceneMap(scenes);

  const renderTabBar = (props) => (
    <Box flexDirection="row">
      {props.navigationState.routes.map((route, i) => {
        const color = index === i ? colors.primary : '#767676';
        const borderColor = index === i ? colors.primary : '#C4EFEF';
        return (
          <Box
            key={`tab-${i}`}
            borderBottomWidth="1"
            borderColor={borderColor}
            flex={1}
            alignItems="center"
            p="3"
            cursor="pointer"
          >
            <Pressable
              onPress={() => {
                setIndex(i);
              }}
            >
              <Animated.Text
                style={{
                  color,
                }}
              >
                {route.title}
              </Animated.Text>
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: 20,
      }}
    />
  );
}
