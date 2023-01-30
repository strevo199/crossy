import React from 'react';
import {Box} from './layouts';
import {Text} from './Typography';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

interface GameCardProps {
  cardItem: {name: string; value: string};
  getCardValue: () => void;
  gameOver: boolean;
}

export const GameCard = ({cardItem, gameOver, getCardValue}: GameCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled= {gameOver}
      onPress={() => getCardValue(cardItem)}>
      <Box
        height={RFValue(100)}
        justifyContent="center"
        alignItems={'center'}
        borderRadius="md"
        elevation={3}
        width={RFValue(100)}
        backgroundColor="gameCardBg">
        <Text variant={'bold48'} color="white">
          {cardItem.value}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
