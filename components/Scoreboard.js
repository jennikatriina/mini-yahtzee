import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCOREBOARD_KEY } from '../constants/Game';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import styles from '../style/style';





export default Scoreboard = ( {navigation} ) => {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getScoreboardData();

    });
    return unsubscribe;
  }, [navigation]);

  const getScoreboardData = async () => {
    try{
      const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
      if (jsonValue !== null) {
        let tmpScores = JSON.parse(jsonValue);
        setScores(tmpScores.sort((b, a) => parseFloat(a.points) - parseFloat(b.points)))
      }
    } catch (error) {
      console.log('Read error: ' + error.message)
    }
  }


  return (
    <View style={styles.container}>
      <Entypo
          name={'trophy'}
          size={80}
          color='#ffffff'
          style={styles.icon}
      />
      <Text style={styles.topSeven}>
        Top 7
      </Text>
      <View >
        {scores.slice(0,7).map((player, i) => (
          <Text key={i}>{i + 1}. {player.name} {player.date} {player.time} {player.points} </Text>
        ))}
      </View>
    </View>
  )
}