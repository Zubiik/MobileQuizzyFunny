import React from 'react';
import { Text } from 'react-native';
import { CardContainer } from './styled';

export default function ThemeCard({ label }) {
  return (
    <CardContainer>
      <Text>{label}</Text>
    </CardContainer>
  );
}
