import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import QuestionsDisplay from '../components/QuestionsDisplay';
import data from '../data/data.json';

export default function GameLoop() {
  const questionsList = data.firstTheme.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameData, setGameData] = useState(questionsList);

  var userAnswer = -1;

  const answerCallback = () => {
    setQuestionIndex(questionIndex + 1);
    var arrayCopy = gameData;
    arrayCopy[questionIndex].userAnswer = userAnswer;
    setGameData(arrayCopy);
    //on reset userAnswer a une valeur par defaut pour la prochaine question
    userAnswer = -1;
  };

  const onPress = (index) => {
    userAnswer = index;
  };
  return (
    <View style={styles.container}>
      {questionIndex > questionsList.length - 1 ? null : (
        <QuestionsDisplay
          onPress={onPress}
          answerCallback={answerCallback}
          question={questionsList[questionIndex]}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
