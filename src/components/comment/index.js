import React, { useState, useEffect } from 'react';
import {
  Box,
  ScrollView,
  Text,
  HStack,
  VStack,
  Divider,
  Image,
  Icon,
  Pressable,
} from 'native-base';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
// Constants
import images from '../../constants/images';

export default function Comment({ comment, handleReply }) {
  const [liked, setLiked] = useState(false);
  const [showMultiReply, setShowMultiReply] = useState(false);

  // useEffect(() => {
  //   console.log('comment', comment);
  // }, []);

  return (
    <HStack px="2" py="4" justifyContent="space-between" alignItems="center" position="relative">
      <HStack alignItems="flex-start">
        <Image source={images.user2} w="12" h="12" alt="user icon" />
        <VStack ml="3" w="80%">
          <Text fontWeight="bold" color="dark.100" fontSize="md">
            {comment.name}
          </Text>
          <Text color="dark.100" fontSize="md" flexWrap="wrap">
            {comment.comment}
          </Text>
          <HStack space={4} mt="2">
            <Text color="dark.400" fontSize="sm">
              {comment.commetTime}
            </Text>
            <Text color="dark.400" fontSize="sm">
              {comment.likesCount} Likes
            </Text>
            <Pressable>
              <Pressable onPress={() => handleReply(comment)}>
                <Text color="dark.400" fontSize="sm">
                  Reply
                </Text>
              </Pressable>
            </Pressable>
          </HStack>
          {/* Reply Section */}
          {comment.reply.length !== 0 && (
            <Box>
              {!showMultiReply && comment.reply.length > 1 && (
                <HStack space={2} alignItems="center" mt="4">
                  <Divider w="12" bg="dark.400" />
                  <Pressable onPress={() => setShowMultiReply(!showMultiReply)}>
                    <Text fontSize="sm" color="dark.400">
                      View {comment.reply.length} replies
                    </Text>
                  </Pressable>
                </HStack>
              )}
              {showMultiReply &&
                comment.reply.length > 1 &&
                comment.reply.map((item) => (
                  <VStack key={item.id}>
                    <HStack alignItems="flex-start" mt="4">
                      <Image source={images.user2} w="8" h="8" alt="user icon" />
                      <VStack ml="3" w="80%">
                        <Text fontWeight="bold" color="dark.100" fontSize="md">
                          {item.name}
                        </Text>
                        <Text color="dark.100" fontSize="md" flexWrap="wrap">
                          {item.comment}
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                ))}
              {comment.reply.length === 1 && (
                <HStack alignItems="flex-start" mt="4">
                  <Image source={images.user2} w="8" h="8" alt="user icon" />
                  <VStack ml="3" w="80%">
                    <Text fontWeight="bold" color="dark.100" fontSize="md">
                      {comment.reply[0].name}
                    </Text>
                    <Text color="dark.100" fontSize="md" flexWrap="wrap">
                      {comment.reply[0].comment}
                    </Text>
                  </VStack>
                </HStack>
              )}
            </Box>
          )}
        </VStack>
      </HStack>
      <Pressable
        position="absolute"
        right="2"
        top="10"
        alignItems="center"
        flexDirection="row"
        onPress={() => setLiked(!liked)}
      >
        <Icon
          as={AndDesignIcon}
          name={liked ? 'heart' : 'hearto'}
          color={liked ? 'red.500' : 'dark.200'}
          size="md"
          mr="1"
        />
      </Pressable>
    </HStack>
  );
}
