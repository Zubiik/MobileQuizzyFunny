import React from 'react';
import { ScrollView } from 'react-native';
import { CardContainer, CardText } from './styled';

export default function ThemeCard({ label }) {
  return (
    <CardContainer>
      <CardText>{label}</CardText>
    </CardContainer>
  );
}
