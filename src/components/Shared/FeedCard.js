import React, { useState } from 'react';
import { HStack, VStack, Box, Divider, Image, Text, Icon, Pressable } from 'native-base';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import images from '../../constants/images';
import ReplugModal from '../replugModal';

export default function FeedCard({ onPressComment, handleReplug, handleQuotePlug }) {
  const [showReplugModal, setShowReplugModal] = useState(false);
  const onPressReplug = () => {
    setShowReplugModal(!showReplugModal);
  };
  const handleCloseModal = () => {
    setShowReplugModal(!showReplugModal);
  };
  const handlePressReplug = () => {
    handleReplug();
    setShowReplugModal(!showReplugModal);
  };
  const handlePressQuotePlug = () => {
    handleQuotePlug();
    setShowReplugModal(!showReplugModal);
  };
  return (
    <>
      <VStack px="4" space="4" mt="6">
        <ReplugModal
          modalShow={showReplugModal}
          onCloseModal={handleCloseModal}
          onPressReplug={handlePressReplug}
          onPressQuotePlug={handlePressQuotePlug}
        />
        <HStack alignItems="center" space={2}>
          <Image source={images.user2} w="12" h="12" alt="user icon" />
          <VStack>
            <Box flexDirection="row" alignItems="center">
              <Text ml="2" fontWeight="bold" color="dark.100" fontSize="md">
                54music
              </Text>
              <Text ml="1" color="dark.500">
                12 min ago
              </Text>
            </Box>
            <Text ml="1" color="dark.400">
              Atlanta, Georgia
            </Text>
            <Text ml="1" color="dark.100" fontSize="md">
              Started my memor wall yesterday
            </Text>
          </VStack>
          <Pressable right={0} position="absolute" p="2" top="0">
            <Image source={images.navVert} alt="nav icon" />
          </Pressable>
        </HStack>
        <Box>
          <Image source={images.post2} w="100%" borderRadius="lg" alt="feed image" />
        </Box>
        <HStack space={10} pb="6">
          <Box alignItems="center" flexDirection="row">
            <Icon as={AndDesignIcon} name="heart" color="red.500" size="lg" mr="1" />
            <Text fontSize="md" color="red.500">
              7.8K
            </Text>
          </Box>
          <Pressable alignItems="center" flexDirection="row" onPress={() => onPressComment('id')}>
            <Icon
              as={Ionicons}
              name="chatbubble-ellipses-outline"
              color="dark.400"
              size="lg"
              mr="1"
            />
            <Text fontSize="md" color="dark.400">
              122
            </Text>
          </Pressable>
          <Pressable
            alignItems="center"
            flexDirection="row"
            onPress={() => onPressReplug('replug')}
          >
            <Icon as={EvilIcons} name="retweet" color="dark.400" size="xl" mr="1" />
            <Text fontSize="md" color="dark.400">
              1.2K
            </Text>
          </Pressable>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}
