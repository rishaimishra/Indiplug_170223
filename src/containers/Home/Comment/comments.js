import React, { useRef, useEffect } from 'react';
import { RefreshControl } from 'react-native';
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
  Input,
  FlatList,
} from 'native-base';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// Components
import Header from '../../../components/Shared/Header';
import CommentCard from '../../../components/comment';
// Constants
import images from '../../../constants/images';

export default function Comments({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [comment, setComment] = React.useState(null);
  const [reply, setReply] = React.useState(null);
  const [comments, setComments] = React.useState([]);

  useEffect(() => {
    const commentList = [
      {
        id: 1,
        image: 'images.user2',
        name: 'Fan One',
        handler: 'fanOne',
        comment:
          'Free and open-source online code editor that allows you to write and execute code from a rich set of languages. Its perfect for anybody who just wants to quickly write and run some code without opening a full-featured IDE on their computer.',
        commetTime: '1d',
        likesCount: '2',
        reply: [],
      },
      {
        id: 2,
        image: 'images.user2',
        name: 'Fan Three',
        handler: 'fnThree',
        comment: 'Free and open-source online code editor that allows you to write.',
        commetTime: '1d',
        likesCount: '2',
        reply: [
          {
            id: 3,
            image: 'images.user2',
            name: 'Fan Two',
            comment:
              'Free and open-source online code editor that allows you to write and execute code from a rich set of languages. Its perfect for anybody who just wants to quickly write and run some code without opening a full-featured IDE on their computer.',
          },
        ],
      },
      {
        id: 4,
        image: 'images.user2',
        name: 'Fan Four',
        handler: 'fanFour',
        comment: 'Free and open-source online code editor that allows you to write.',
        commetTime: '1d',
        likesCount: '2',
        reply: [
          {
            id: 6,
            image: 'images.user2',
            name: 'Fan Five',
            comment:
              'Free and open-source online code editor that allows you to write and execute code from a rich set of languages. Its perfect for anybody.',
          },
          {
            id: 7,
            image: 'images.user2',
            name: 'Fan Six',
            comment: 'Amezing Work',
          },
        ],
      },
      {
        id: 8,
        image: 'images.user2',
        name: 'Fan Seven',
        handler: 'fanSeven',
        comment: 'Free and open-source online code editor that allows you to write.',
        commetTime: '1d',
        likesCount: '2',
        reply: [
          {
            id: 9,
            image: 'images.user2',
            name: 'Fan Eight',
            comment: 'Free and open-source online code.',
          },
          {
            id: 10,
            image: 'images.user2',
            name: 'Fan Nine',
            comment: 'Amezing Work',
          },
          {
            id: 11,
            image: 'images.user2',
            name: 'Fan Ten',
            comment: 'Amezing Work',
          },
        ],
      },
    ];

    setComments(commentList);
  }, []);

  const inputRef = useRef();

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing ...');
    setRefreshing(false);
  };

  const onReply = (rep) => {
    inputRef.current.focus();
    setReply(rep);
  };

  const handleComment = () => {
    if (reply) {
      const exixtingComments = comments;
      if (comment) {
        const commentId = exixtingComments.findIndex((item) => item.id === reply.id);
        const replyData = {
          id: 3 + comment,
          image: 'images.user2',
          name: 'John Doe',
          comment,
        };

        exixtingComments[commentId].reply.push(replyData);
        setComments(exixtingComments);
        setComment('');
      }
      setReply(null);
      inputRef.current.blur();
    } else {
      if (comment) {
        const exixtingComments = comments;
        const newComment = {
          id: 12,
          image: 'images.user2',
          name: 'Fan 123',
          handler: 'fan123',
          comment,
          commetTime: '',
          likesCount: '',
          reply: [],
        };
        exixtingComments.push(newComment);
        setComments(exixtingComments);
        setComment('');
      }
      inputRef.current.blur();
    }
  };

  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} back title="Comments" />
      <VStack px="4">
        <HStack alignItems="center" space={2} mt="6">
          <Image source={images.user2} w="12" h="12" alt="user icon" />
          <VStack>
            <Box flexDirection="row" alignItems="center">
              <Text ml="2" fontWeight="bold" color="dark.100" fontSize="md">
                54music
              </Text>
            </Box>
            <Text ml="1" color="dark.400">
              Atlanta, Georgia
            </Text>
          </VStack>
          <Pressable right={0} position="absolute" p="2" top="0">
            <Image source={images.navVert} alt="nav icon" />
          </Pressable>
        </HStack>
        <Text mt="2" color="dark.100" fontSize="md">
          Started my memor wall yesterday
        </Text>
        <HStack pb="6" mt="2.5" justifyContent="space-between" alignItems="center">
          <HStack space={5}>
            <Box alignItems="center" flexDirection="row">
              <Icon as={AndDesignIcon} name="heart" color="red.500" size="md" mr="1" />
              <Text fontSize="md" color="red.500">
                7.8K
              </Text>
            </Box>
            <Box alignItems="center" flexDirection="row">
              <Icon
                as={Ionicons}
                name="chatbubble-ellipses-outline"
                color="dark.400"
                size="md"
                mr="1"
              />
              <Text fontSize="md" color="dark.400">
                122
              </Text>
            </Box>
            <Box alignItems="center" flexDirection="row">
              <Icon as={EvilIcons} name="retweet" color="dark.200" size="lg" mr="1" />
              <Text fontSize="md" color="dark.400">
                1.2K
              </Text>
            </Box>
          </HStack>
          <Text ml="1" color="dark.500">
            12 min ago
          </Text>
        </HStack>
      </VStack>
      <Divider />
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <CommentCard key={item.id} comment={item} handleReply={onReply} />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      <Box position="relative">
        <Input
          ref={inputRef}
          value={comment}
          variant="filled"
          size="md"
          placeholder="Comment ..."
          type="text"
          onChangeText={(text) => setComment(text)}
        />
        <Pressable position="absolute" right="4" top="30%" onPress={handleComment}>
          <Image source={images.send} resizeMode="contain" alt="send button" />
        </Pressable>
      </Box>
    </Box>
  );
}
