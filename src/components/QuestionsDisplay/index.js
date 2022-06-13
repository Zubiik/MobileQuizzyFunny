import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ItemContainer, TextCustom } from './styled';
import Button from '../Button';

export default function QuestionsDisplay({
  question,
  answerCallback,
  onPress,
}) {
  return (
    <Container>
      <Text>{question.question}</Text>

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
      <Button textButton={'coucou'} callback={answerCallback} />
    </Container>
  );
}
