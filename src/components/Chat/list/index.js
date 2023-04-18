import React from 'react';
import { Box, HStack, Image, Text, Heading, VStack, Divider, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function Lists() {
  const navigation  = useNavigation()
  return (
    <Box py="4">
      <Pressable onPress={()=> navigation.navigate('Chat')}>
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
          <Text color="dark.300">12:07pm</Text>
        </HStack>
      <Divider/>
      </Pressable>
      <Pressable onPress={()=> navigation.navigate('Chat')}>
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
          <Text color="dark.300">12:07pm</Text>
        </HStack>
      <Divider/>
      </Pressable>
    </Box>
  );
}
