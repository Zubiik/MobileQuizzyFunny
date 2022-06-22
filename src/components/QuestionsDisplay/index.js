import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ItemContainer, TextCustom, QuestionCustom } from './styled';
import Button from '../Button';

export default function QuestionsDisplay({
  question,
  answerCallback,
  onPress,
}) {
  return (
    <Container>
      <QuestionCustom>{question.question}</QuestionCustom>

      {question.choices.map((choice, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onPress(index);
            }}
          >
            <ItemContainer>
              <TextCustom>{choice}</TextCustom>
            </ItemContainer>
          </TouchableOpacity>
        );
      })}
      <Button textButton={'NEXT'} callback={answerCallback} />
    </Container>
  );
}
