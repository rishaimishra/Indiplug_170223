import React from 'react';
import {
  HStack,
  VStack,
  Box,
  Divider,
  Image,
  Text,
  Icon,
  Pressable,
  Input,
  ScrollView,
  Button,
} from 'native-base';
// Components
import Header from '../../../components/Shared/Header';
// Constants
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function QuotePlug({ navigation }) {
  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} back />
      <ScrollView safeAreaTop p="4">
        {/* Comment */}
        <HStack alignItems="center" my="4">
          <Image source={images.user2} w="10" h="10" borderRadius={50} alt="user icon" />
          <Input ml="2" placeholder="comment" variant="filled" color="dark.200" />
        </HStack>
        {/* Image */}
        <Box my="2">
          <Image source={images.post2} w="100%" borderRadius="lg" alt="feed image" />
        </Box>
        {/* User */}
        <HStack alignItems="center" space={2}>
          <Image source={images.user2} w="12" h="12" borderRadius={50} alt="user icon" />
          <VStack>
            <Text ml="2" fontWeight="bold" color="dark.100" fontSize="md">
              54music
            </Text>
            <Text ml="1" color="dark.400">
              Atlanta, Georgia
            </Text>
            <Text ml="1" color="dark.100" fontSize="md">
              Started my memor wall yesterday
            </Text>
          </VStack>
        </HStack>
        {/* Quote Plug Button */}
        <Button
          colorScheme="primary"
          bg={colors.primary}
          rounded="lg"
          my="4"
          px="10"
          alignSelf="flex-end"
          onPress={() => {
            console.log('hello');
          }}
        >
          Quote Plug
        </Button>
      </ScrollView>
    </Box>
  );
}
