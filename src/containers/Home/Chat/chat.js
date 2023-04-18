import React from 'react';
import {
  Box,
  Text,
  Image,
  ScrollView,
  HStack,
  Icon,
  Pressable,
  Input,
  TextArea,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function ChatScreen({ navigation }) {
  return (
    <Box flex={1} bg="white" h="100%">
      {/* Header */}
      <HStack alignItems="center" space="3" px="4" py="2">
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={images.arrowLeft} alt="user profile image" />
        </Pressable>
        <Image
          size="xs"
          alt="thumbnail"
          borderRadius={100}
          source={images.post2}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <Text color="dark.200" fontSize="md">
          Fan One
        </Text>
      </HStack>
      {/* Body */}
      <ScrollView px="4">
        <Text bg={colors.upload} p="2" color="dark.100" borderRadius="lg" w="75%" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text bg={colors.upload} p="2" color="dark.100" borderRadius="lg" w="75%" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text
          bg="dark.600"
          p="2"
          color="dark.100"
          borderRadius="lg"
          w="75%"
          mb="4"
          position="relative"
          right="-25%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text
          bg="dark.600"
          p="2"
          color="dark.100"
          borderRadius="lg"
          w="75%"
          mb="4"
          position="relative"
          right="-25%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text bg={colors.upload} p="2" color="dark.100" borderRadius="lg" w="75%" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text bg={colors.upload} p="2" color="dark.100" borderRadius="lg" w="75%" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Text
          bg="dark.600"
          p="2"
          color="dark.100"
          borderRadius="lg"
          w="75%"
          mb="4"
          position="relative"
          right="-25%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida justo et aliquam
          gravida. Duis ultricies ligula eu ipsum ornare pulvinar
        </Text>
        <Box pb="60" />
      </ScrollView>
      {/* Textbox */}
      <Box position="absolute" bottom={0} w="100%" pb={4} bg="white">
        <TextArea
          type="text"
          h="12"
          variant="filled"
          bg="dark.700"
          mx="4"
          borderRadius="lg"
          InputRightElement={
            <Pressable>
              <Icon as={<Ionicons name="send-outline" />} size={5} mr="2" color="dark.200" />
            </Pressable>
          }
          placeholder="Type..."
          fontSize="md"
        />
      </Box>
    </Box>
  );
}
