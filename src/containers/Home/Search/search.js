import React, { useState } from 'react';
import { Box, Icon, Input, Pressable, Center } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/Shared/Header';
import TabBar from '../../../components/Ui/TabBar';
// Components
import Accounts from '../../../components/search/accounts';
import Audios from '../../../components/search/audios';
import Products from '../../../components/search//products';
import Events from '../../../components/search/events';

export default function SearchScreen() {
  const [searchInput, setSearchInput] = useState(null);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Accounts',
    },
    {
      key: 'second',
      title: 'Audios',
    },
    {
      key: 'third',
      title: 'Products',
    },
    {
      key: 'fourth',
      title: 'Events',
    },
  ]);

  const scenes = {
    first: Accounts,
    second: Audios,
    third: Products,
    fourth: Events,
  };

  return (
    <Box flex={1} bg="white">
      <Header title="Search" />
      <Box mt="2" mx="4">
        <Input
          type="text"
          value={searchInput}
          borderRadius="lg"
          borderColor="gray.500"
          onChangeText={(text) => setSearchInput(text)}
          InputRightElement={
            <Pressable onPress={() => setSearchInput(null)}>
              <Icon
                as={<MaterialIcons name={searchInput ? 'close' : ''} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Search"
        />
      </Box>

      <TabBar routes={routes} scenes={scenes} />
    </Box>
  );
}