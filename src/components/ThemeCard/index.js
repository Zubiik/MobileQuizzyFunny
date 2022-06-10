import React from 'react';
import { Text } from 'react-native';
import { CardContainer } from './styled';

export default function ThemeCard({ data }) {
  return (
    <CardContainer>
      <Text>{data.firstTheme.themeName}</Text>
    </CardContainer>
  );
}
