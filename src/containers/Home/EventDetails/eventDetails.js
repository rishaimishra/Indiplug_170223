import React from 'react';
import { Text, Box, ScrollView, Image, HStack, Pressable, Heading } from 'native-base';
import Header from '../../../components/Shared/Header';
import images from '../../../constants/images';

export default function EventDetails({ navigation }) {
  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} back title="Events" />
      <ScrollView>
        {/* Banner */}
        <Box position="relative">
          <Image source={images.banner} alt="event banner" w="100%" />
          <Pressable position="absolute" right={3} top={3}>
            <HStack bg="dark.200" width="16" borderRadius="2xl" px="3">
              <Image source={images.pin} h="6" resizeMode="contain" alt="pin icon" />
              <Text ml="2" color="white">
                Pin
              </Text>
            </HStack>
          </Pressable>
        </Box>
        {/* Share */}
        <HStack justifyContent="flex-end" pr="6" my="4">
          <Pressable mr="4">
            <HStack alignItems="center">
              <Image source={images.share} />
              <Text ml="2" fontSize="md">
                Share
              </Text>
            </HStack>
          </Pressable>
          <Pressable mr="2">
            <HStack alignItems="center">
              <Image source={images.edit} />
              <Text ml="2" fontSize="md">
                Edit
              </Text>
            </HStack>
          </Pressable>
        </HStack>
        {/* Details */}
        <Box px="6">
          <Heading fontSize="xl">Songs Night open mic at Boston Hotel</Heading>
          <HStack alignItems="center" mt="2">
            <Image
              source={images.user2}
              alt="profile"
              bg="red"
              resizeMode="contain"
              h="8"
              w="8"
              rounded="2xl"
            />
            <Text fontSize="md" color="dark.400" ml="2">
              Organized by
            </Text>
            <Text fontSize="md" color="dark.200" ml="2">
              Grame Smith
            </Text>
          </HStack>
          <HStack mt="4">
            <Image source={images.locationGray} alt="profile" bg="red" resizeMode="contain" h="8" />
            <Text fontSize="md" color="dark.400" ml="2">
              Lara Djonggrang Central Jakarta City, Jakarta, Indonesia
            </Text>
          </HStack>
          <HStack mt="4" alignItems="center">
            <HStack alignItems="center">
              <Box bg="#D2EDED" p="2" borderRadius="md">
                <Image source={images.calenderGreen} alt="calender" />
              </Box>
              <Box ml="2">
                <Text fontSize="md" fontWeight="semibold">
                  Feb 23
                </Text>
                <Text color="dark.400" fontSize="sm">
                  Date
                </Text>
              </Box>
            </HStack>
            <HStack alignItems="center" ml="10">
              <Box bg="#D2EDED" p="2" borderRadius="md">
                <Image source={images.clockGreen} alt="calender" />
              </Box>
              <Box ml="2">
                <Text fontSize="md" fontWeight="semibold">
                  8:30 AM - 9:30 AM
                </Text>
                <Text color="dark.400" fontSize="sm">
                  Time
                </Text>
              </Box>
            </HStack>
          </HStack>
          <Box mt="4">
            <Heading fontSize="xl">About Event</Heading>
            <Text fontSize="md" color="dark.400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae felis nibh.
              Donec auctor metus vitae aliquam
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
