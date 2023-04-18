import React from 'react';
import { Box, HStack, Image, Text, Heading, VStack } from 'native-base';
import images from '../../../constants/images';

export default function Products() {
  return (
    <Box px="4" py="4">
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.product}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Product Name</Heading>
          <Text color="dark.300">Product Description</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.product}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Product Name</Heading>
          <Text color="dark.300">Product Description</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.product}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Product Name</Heading>
          <Text color="dark.300">Product Description</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={3} my="4">
        <Image
          size="sm"
          alt="thumbnail"
          borderRadius={100}
          source={images.product}
          fallbackSource={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
        />
        <VStack>
          <Heading size="sm">Product Name</Heading>
          <Text color="dark.300">Product Description</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
