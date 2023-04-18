import React from 'react'
import { Box, Text, HStack, ScrollView, Image, Button, Icon, Heading, VStack} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../../components/Shared/Header';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

export default function Activity({navigation}) {
  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} back title="Activity" />
      <ScrollView px="4" >
        {/* Music */}
        <HStack alignItems="center" justifyContent={'space-between'} space={3} my="4" >
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
            </Box>
            <VStack ml="2">
              <Heading size="sm">George Brown</Heading>
              <Text color="dark.300">Beat post 3min ago</Text>
            </VStack>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon as={<MaterialIcons name="play-circle-outline" />} size={'md'} mr="2" color="dark.200" />
            <Text color="dark.200" fontSize={"md"}>my name.mp3</Text>
          </HStack>
        </HStack>
        {/* Image */}
        <HStack alignItems="center" justifyContent={'space-between'} space={3} my="4" >
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
            </Box>
            <VStack ml="2">
              <Heading size="sm">54 music</Heading>
              <Text color="dark.300">Liked post 7min ago</Text>
            </VStack>
          </HStack>
          <HStack alignItems={"center"}>
            <Image
              size="sm"
              alt="thumbnail"
              borderRadius={"lg"}
              source={images.post2}
              fallbackSource={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
            />
          </HStack>
        </HStack>
        {/* Follow Back */}
        <HStack alignItems="center" justifyContent={'space-between'} space={3} my="4" >
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
            </Box>
            <VStack ml="2">
              <Heading size="sm">Ayanadior</Heading>
              <Text color="dark.300">Started following you 7h ago</Text>
            </VStack>
          </HStack>
          <HStack alignItems={"center"}>
            <Button colorScheme="primary" size="sm" borderRadius="lg" >
              Follow Back
            </Button>
          </HStack>
        </HStack>
         {/* Following */}
         <HStack alignItems="center" justifyContent={'space-between'} space={3} my="4" >
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
            </Box>
            <VStack ml="2">
              <Heading size="sm">Ayanadior</Heading>
              <Text color="dark.300">Started following you 7h ago</Text>
            </VStack>
          </HStack>
          <HStack alignItems={"center"}>
            <Button variant="outline" colorScheme="black" size="sm" borderRadius="lg" >
              Following
            </Button>
          </HStack>
        </HStack>
      </ScrollView>
    </Box>
  )
}