import React from 'react';
import { Box, Text, Image, HStack, Button } from 'native-base';
import Header from '../../../components/Shared/Header';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function EventSuccess({ navigation }) {
  return (
    <Box bg="white" flex={1} position="relative">
      <Header title="Events Successful" />
      <Image source={images.eventSuccess} alt="image success image" mt="20%" />
      <Text fontSize="lg" color="dark.300" textAlign="center" mt="4">
        Event Created Successfully
      </Text>
      <HStack alignItems="center" px="6" mb="10%" position="absolute" bottom="2%">
        <Button
          onPress={() => navigation.navigate('Profile')}
          bg={colors.primary}
          flex={1}
          borderRadius="lg"
          h="12"
          mr="2"
        >
          Go to List
        </Button>
        <Button
          bg="#ABDDDD"
          flex={1}
          borderRadius="lg"
          h="12"
          ml="2"
          onPress={() => navigation.navigate('EventDetails')}
        >
          <Text color="dark.200">View Event</Text>
        </Button>
      </HStack>
    </Box>
  );
}
