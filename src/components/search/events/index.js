import React from 'react';
import { Box, HStack, Image, Text, Heading, VStack } from 'native-base';
import images from '../../../constants/images';

export default function Events() {
  return (
    <Box px="4" py="4">
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.event}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Happy Birthday, Johann!</Heading>
          <Text color="dark.300">103 W. 7th St., Georgetown, TX 78626</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.event}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Happy Birthday, Johann!</Heading>
          <Text color="dark.300">103 W. 7th St., Georgetown, TX 78626</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.event}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Happy Birthday, Johann!</Heading>
          <Text color="dark.300">103 W. 7th St., Georgetown, TX 78626</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.event}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Happy Birthday, Johann!</Heading>
          <Text color="dark.300">103 W. 7th St., Georgetown, TX 78626</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
