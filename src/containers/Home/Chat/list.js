import React, {useState} from 'react'
import {Box, Text} from 'native-base'
import TabBar from '../../../components/Ui/TabBar';
import Header from '../../../components/Shared/Header'
// Components
import List from '../../../components/Chat/list';
import Pendings from '../../../components/Chat/pending';

export default function ChatList({navigation}) {
  const [routes] = useState([
    {
      key: 'first',
      title: 'Chats',
    },
    {
      key: 'second',
      title: 'Pending Requests 3',
    },
  ]);

  const scenes = {
    first: List,
    second: Pendings,
  };
  return (
    <Box flex={1} bg="white">
      <Header nav={navigation} back title="Chat"/>
      <TabBar routes={routes} scenes={scenes} />
    </Box>
  )
}