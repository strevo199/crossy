import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Box, GameCards} from '../../../components';
import {palette} from '../../../theme/palette';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: palette.bgOne}}>
      <StatusBar hidden />
      <Box flex={1}>
        <Box flex={1}>
          {/* <ScoreBoard/> */}
        </Box>
        <Box flex={2}>
          <GameCards />
        </Box>
        <Box flex={0.5} />
      </Box>
    </SafeAreaView>
  );
};
