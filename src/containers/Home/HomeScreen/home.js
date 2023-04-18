import React from 'react';
import { Box, ScrollView } from 'native-base';
import Header from '../../../components/Shared/Header';
import FeedCard from '../../../components/Shared/FeedCard';

export default function HomeScreen({ navigation }) {
  const handleComment = (comment) => {
    navigation.navigate('Comments');
  };
  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} chat title="Timeline" />
      <ScrollView safeAreaTop>
        <FeedCard onPressComment={handleComment} />
        <FeedCard onPressComment={handleComment} />
        <FeedCard onPressComment={handleComment} />
        <FeedCard onPressComment={handleComment} />
        <FeedCard onPressComment={handleComment} />
      </ScrollView>
    </Box>
  );
}
