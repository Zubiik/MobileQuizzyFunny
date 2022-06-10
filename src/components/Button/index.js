import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { ButtonBox, Container, ButtonText } from './styled';

export default function Button({ callback, textButton }) {
  return (
    <Container>
      <ButtonBox onPress={() => callback()}>
        <ButtonText>{textButton}</ButtonText>
      </ButtonBox>
    </Container>
  );
}
