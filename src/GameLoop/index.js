import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import QuestionsDisplay from '../components/QuestionsDisplay';
import data from '../data/data.json';

export default function GameLoop() {
  const dataQuestions = data.firstTheme.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [dataQuestionCopy, setDataQuestionCopy] = useState(dataQuestions);

  const answerCallback = (userAnswer) => {
    setQuestionIndex(questionIndex + 1);
  };
  //dataQuestionCopy.question[questionIndex].userAnswer.push;
  return (
    <View style={styles.container}>
      {questionIndex > dataQuestions.length - 1 ? null : (
        <QuestionsDisplay
          answerCallback={answerCallback}
          question={dataQuestions[questionIndex]}
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
