import React from 'react';
import { View, Text } from 'react-native';
import { CardContainer } from './styled';

export default function UserResult({ resultCalcul, text, arrayLenght }) {
  resultCalcul();

  return (
    <View>
      <Text>
        {text}/{arrayLenght}
      </Text>
    </View>
  );
}
