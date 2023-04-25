import React from 'react';
import { Box, ScrollView } from 'native-base';
import Header from '../../../components/Shared/Header';
import FeedCard from '../../../components/Shared/FeedCard';

export default function HomeScreen({ navigation }) {
  const handleComment = (comment) => {
    navigation.navigate('Comments');
  };
  const onClickReplug = () => {
    console.log('--------');
  };
  const onClickQuotePlug = () => {
    console.log('+++++');
    navigation.navigate('QuotePlug');
  };

  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} chat title="Timeline" />

      <ScrollView safeAreaTop>
        <FeedCard
          onPressComment={handleComment}
          handleReplug={onClickReplug}
          handleQuotePlug={onClickQuotePlug}
        />
      </ScrollView>
    </Box>
  );
}
