import React from 'react';
import { Box, HStack, Image, Text, Heading, VStack, Divider, Pressable } from 'native-base';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function Pendings() {
  return (
    <Box py="4" position="relative" h={'100%'}>
      {/* List */}
      <Pressable>
        <HStack alignItems="flex-start" justifyContent={'space-between'} space={3} my="4" px="4" >
          <HStack alignItems={"center"}>
          <Box position={'relative'}>
            <Image
              size="xs"
              alt="thumbnail"
              borderRadius={100}
              source={images.post2}
              fallbackSource={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
            />
            <Box background={colors.white} p="1.8" borderRadius={'2xl'} position={"absolute"} right={-2} bottom={-2}>
              <Box background={colors.primary} p="1.5" borderRadius={'lg'}/>
            </Box>
            </Box>
            <VStack ml="2">
              <Heading size="sm">George Brown</Heading>
              <Text color="dark.300">Artist, Los Angeles</Text>
            </VStack>
          </HStack>
          <HStack>
              <Pressable>
                <Text color={colors.primary} fontSize={'md'}>Approve</Text>
              </Pressable>
              <Pressable ml="4">
                <Text color="danger.500" fontSize={'md'}>Decline</Text>
              </Pressable>
          </HStack>
        </HStack>
      <Divider/>
      </Pressable>
      <Pressable>
        <HStack alignItems="flex-start" justifyContent={'space-between'} space={3} my="4" px="4" >
          <HStack alignItems={"center"}>
          <Box position={'relative'}>
            <Image
              size="xs"
              alt="thumbnail"
              borderRadius={100}
              source={images.post2}
              fallbackSource={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
            />
            <Box background={colors.white} p="1.8" borderRadius={'2xl'} position={"absolute"} right={-2} bottom={-2}>
              <Box background={colors.primary} p="1.5" borderRadius={'lg'}/>
            </Box>
            </Box>
            <VStack ml="2">
              <Heading size="sm">George Brown</Heading>
              <Text color="dark.300">Artist, Los Angeles</Text>
            </VStack>
          </HStack>
          <HStack>
              <Pressable>
                <Text color={colors.primary} fontSize={'md'}>Approve</Text>
              </Pressable>
              <Pressable ml="4">
                <Text color="danger.500" fontSize={'md'}>Decline</Text>
              </Pressable>
          </HStack>
        </HStack>
      <Divider/>
      </Pressable>
      <Pressable>
        <HStack alignItems="flex-start" justifyContent={'space-between'} space={3} my="4" px="4" >
          <HStack alignItems={"center"}>
          <Box position={'relative'}>
            <Image
              size="xs"
              alt="thumbnail"
              borderRadius={100}
              source={images.post2}
              fallbackSource={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
            />
            <Box background={colors.white} p="1.8" borderRadius={'2xl'} position={"absolute"} right={-2} bottom={-2}>
              <Box background={colors.primary} p="1.5" borderRadius={'lg'}/>
            </Box>
            </Box>
            <VStack ml="2">
              <Heading size="sm">George Brown</Heading>
              <Text color="dark.300">Artist, Los Angeles</Text>
            </VStack>
          </HStack>
          <HStack>
              <Pressable>
                <Text color={colors.primary} fontSize={'md'}>Approve</Text>
              </Pressable>
              <Pressable ml="4">
                <Text color="danger.500" fontSize={'md'}>Decline</Text>
              </Pressable>
          </HStack>
        </HStack>
      <Divider/>
      </Pressable>
      {/* Global button */}
      <Box position="absolute" bottom={0} w="100%">
        <Divider/>
        <HStack justifyContent={"space-between"}  py="5" px="8" >
            <Pressable>
              <Text color={colors.primary} fontSize='md'>Decline All</Text>
            </Pressable>
            <Pressable ml="4">
              <Text color={colors.primary} fontSize='md'>Approve All</Text>
            </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}
