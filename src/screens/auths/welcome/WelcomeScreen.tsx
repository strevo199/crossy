import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {Box, Text} from '../../../components';

export const WelcomeScreen = () => {
  const [playerData, setplayerData] = useState({
    username: '',
    playerChar: '',
    playerMode: '',
    higestscore: '',
  });

  type updateplayerDataType = {
    label: keyof typeof playerData;
    value: string;
  };

  const {username, playerChar, playerMode, higestscore} = playerData;
  const updateplayerData = ({label, value}: updateplayerDataType) => {
    setplayerData({
      ...playerData,
      [label]: value,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} backgroundColor="mainBackground">
        <Box backgroundColor={'grayLight'} flex={1}>
          <Text variant={'bold24'} textAlign="center" color="textColor">
            Welcome to The game
          </Text>
        </Box>

        <Box flex={1} margin="md">
          <Text variant={'bold24'} textAlign="center" color="textColor">
            Select your Player
          </Text>
          <Box>
            <Box
              alignItems={'flex-start'}
              padding="sm"
              borderRadius={'sm'}
              borderWidth={0.7}
              borderColor="primaryColor">
              <Text variant={'medium12'} textAlign="center" color="textColor">
                UserName:
              </Text>
              <TextInput
                placeholder="stevolala"
                style={{
                  fontWeight: '400',
                  fontSize: 18,
                  letterSpacing: 1,
                  marginTop: 4,
                }}
                onChangeText={value =>
                  updateplayerData({label: 'username', value})
                }
                value={username}
              />
            </Box>

            <Box
              marginTop={'md'}
              alignItems={'flex-start'}
              padding="sm"
              borderRadius={'sm'}
              borderWidth={0.7}
              borderColor="primaryColor">
              <Text variant={'medium12'} textAlign="center" color="textColor">
                Enter A Character:
              </Text>
              <TextInput
                placeholder="stevolala"
                editable={playerChar.length === 1 ? false : true}
                style={{
                  fontWeight: '400',
                  fontSize: 18,
                  letterSpacing: 1,
                  marginTop: 4,
                }}
                onChangeText={value =>
                  updateplayerData({label: 'playerMode', value})
                }
                value={playerMode}
              />
            </Box>
          </Box>
          T
        </Box>
      </Box>
    </SafeAreaView>
  );
};
