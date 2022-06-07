import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { ButtonBox, Container, ButtonText } from './styled';

//////Create Button function in handler and import here for onPress//////
export default function Button() {
  return (
    <Container>
      <ButtonBox onPress={() => Alert.alert('Aouch')}>
        <ButtonText>Hello there</ButtonText>
      </ButtonBox>
    </Container>
  );
}
