import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ItemContainer, TextCustom } from './styled';
import Button from '../Button';
// TODO changer le nom du composant
// TODO changer la props de data => question
export default function QuestionsDisplay({ question, answerCallback }) {
  const onPress = () => {};

  return (
    <Container>
      <Text>{question.question}</Text>

      {question.choices.map((choice, index) => {
        return (
          <TouchableOpacity onPress={onPress}>
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
