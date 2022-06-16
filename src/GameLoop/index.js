import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import QuestionsDisplay from '../components/QuestionsDisplay';
import UserResult from '../components/UserResult';
import data from '../data/data.json';
import Button from '../components/Button';

export default function GameLoop() {
  const questionsList = data.firstTheme.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [finalResult, setFinalResult] = useState();
  const [gameData, setGameData] = useState(questionsList);

  var userAnswer = -1;
  var myResult = 0;

  const answerCallback = () => {
    setQuestionIndex(questionIndex + 1);
    var arrayCopy = gameData;
    arrayCopy[questionIndex].userAnswer = userAnswer;
    setGameData(arrayCopy);
    //on reset userAnswer a une valeur par defaut pour la prochaine question
    userAnswer = -1;
  };
  const resultCalcul = () => {
    gameData.forEach((result) => {
      if (result.answer === result.userAnswer) {
        myResult += 1;
      } else {
        console.log('looser');
      }
    });
    setFinalResult(myResult);
  };

  const onPress = (index) => {
    userAnswer = index;
  };
  return (
    <View style={styles.container}>
      {questionIndex > questionsList.length - 1 ? (
        <UserResult
          resultCalcul={resultCalcul}
          text={finalResult}
          arrayLenght={questionsList.length}
        />
      ) : (
        <QuestionsDisplay
          onPress={onPress}
          answerCallback={answerCallback}
          question={questionsList[questionIndex]}
        />
      )}
      <Button textButton={'Home'} callback={() => setQuestionIndex(0)} />
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
