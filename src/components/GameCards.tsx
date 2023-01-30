import React, {useEffect, useState} from 'react';
import {GameCard} from './GameCard';
import {Box} from './layouts';

export const GameCards = () => {
  const data: {name: string; value: string}[] = [
    {name: 'box1', value: ''},
    {name: 'box2', value: ''},
    {name: 'box3', value: ''},
    {name: 'box4', value: ''},
    {name: 'box5', value: ''},
    {name: 'box6', value: ''},
    {name: 'box7', value: ''},
    {name: 'box8', value: ''},
    {name: 'box9', value: ''},
  ];
  const playerOne = 'X';
  const playerTwo = '0';
  const [currentPlayer, setcurrentPlayer] = useState(playerOne);
  const [nextPlayer, setNextPlayer] = useState('');
  const [gameOver, setgameOver] = useState(false);
  const [opponentIsAI, setopponentIsAI] = useState(true);

  const [boxes, setBoxes] = useState(data);

  const handleCardValue = item => {
    if (item.value) {
      return;
    } else {
      const newState = boxes.map(v => {
        if (v.name === item.name) {
          if (currentPlayer === playerOne) {
            setcurrentPlayer(playerTwo);
            setNextPlayer(playerTwo);
            return {...v, value: playerOne};
          }
          if (currentPlayer === playerTwo) {
            setcurrentPlayer(playerOne);
            setNextPlayer(playerOne);

            return {...v, value: playerTwo};
          }
        }

        return v;
      });

      setBoxes(newState);
      handleCheckForWinner(newState);
    }
  };

  const handleCheckForWinner = (
    boxesArray: {name: string; value: string}[],
  ) => {
    const chunArray = [
      [boxesArray[0], boxesArray[1], boxesArray[2]],
      [boxesArray[3], boxesArray[4], boxesArray[5]],
      [boxesArray[6], boxesArray[7], boxesArray[8]],
      [boxesArray[0], boxesArray[3], boxesArray[6]],
      [boxesArray[1], boxesArray[4], boxesArray[7]],
      [boxesArray[2], boxesArray[5], boxesArray[8]],
      [boxesArray[0], boxesArray[4], boxesArray[8]],
      [boxesArray[2], boxesArray[4], boxesArray[6]],
    ];

    chunArray.map(item => {
      if (
        item[0].value === currentPlayer &&
        item[1].value === currentPlayer &&
        item[2].value === currentPlayer
      ) {
        setgameOver(!gameOver);
        // Alert.alert('Succesful!!!', `${currentPlayer} wins`);
        // Sow wins modal
      }

      return 0;
    });
  };

  const handleCardValueAIResponse = () => {
    const newArray: any[] = [];
    boxes.map(v => {
      if (v.value === '') {
        newArray.push(v);
      }
    });

    const renadomNumber = Math.floor(Math.random() * newArray.length);
    const aiValue = newArray[renadomNumber];
    if (newArray.length) {
      handleCardValue(aiValue);
    }
  };

  useEffect(() => {
    if (opponentIsAI && !gameOver && nextPlayer === playerTwo) {
      setTimeout(() => {
        handleCardValueAIResponse();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPlayer, gameOver]);

  return (
    <Box
      padding={'sm'}
      flex={1}
      gap="sm"
      justifyContent={'center'}
      alignItems="center"
      flexDirection="row"
      flexWrap={'wrap'}>
      {boxes.map((item: {name: string; value: string}) => {
        return (
          <GameCard
            key={item.name}
            gameOver={gameOver}
            getCardValue={handleCardValue}
            cardItem={item}
          />
        );
      })}
    </Box>
  );
};
