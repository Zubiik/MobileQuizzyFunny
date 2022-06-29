import React from 'react';
import { View, Text } from 'react-native';
import { TextCustom } from './styled';

export default function UserResult({ resultCalcul, text, arrayLenght }) {
  resultCalcul();

  return (
    <View>
      <TextCustom>Votre score est de</TextCustom>
      <TextCustom>
        {text}/{arrayLenght}
      </TextCustom>
    </View>
  );
}
