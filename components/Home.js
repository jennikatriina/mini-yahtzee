import React, { useState } from 'react';
import { Keyboard, Pressable, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { MAX_SPOT, MIN_SPOT, NBR_OF_DICES, NBR_OF_THROWS, BONUS_POINTS_LIMIT, BONUS_POINTS } from '../constants/Game';
import styles from '../style/style';

export default Home = ({ navigation }) => {

  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const HandlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }

  return (
    <View style={styles.container}>
      {!hasPlayerName
        ?
        <>
          <FontAwesome5
            name='users'
            size={80}
            color='#ffffff'
            style={styles.icon}
          />
          <Text>For scoreboard, enter your name</Text>
          <TextInput onChangeText={setPlayerName} autoFocus={true}></TextInput>
          <Pressable onPress={() => HandlePlayerName(playerName)}>
            <Text>OK</Text>
          </Pressable>
        </>
        :
        <>
          <Entypo
            name={'info'}
            size={80}
            color='#ffffff'
            style={styles.icon}
          />
          <Text style={styles.instructions}>
            THE GAME: Upper section of the classic Yahtzee
            dice game. You have {NBR_OF_DICES} dices and
            for the every dice you have {NBR_OF_THROWS}
            throws. After each throw you can keep dices in
            order to get same dice spot counts as many as
            possible. In the end of the turn you must select
            your points from {MIN_SPOT} to {MAX_SPOT}.
            Game ends when all points have been selected.
            The order for selecting those is free.
          </Text>
          <Text style={styles.instructions}>
            POINTS: After each turn game calculates the sum
            for the dices you selected. Only the dices having
            the same spot count are calculated. Inside the
            game you can not select same points from {MIN_SPOT} to {MAX_SPOT} again.
          </Text>
          <Text style={styles.instructions}>
            GOAL: To get points as much as possible.
          </Text>
          <Text style={styles.goodLuck}>Good luck, {playerName}!</Text>
          <Pressable onPress={() => navigation.navigate('Gameboard',
            { player: playerName })}>
            <Text style={styles.button}>PLAY</Text>
          </Pressable>
        </>
      }
    </View>
  )
}