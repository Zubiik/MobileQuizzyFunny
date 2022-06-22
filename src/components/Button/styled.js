import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: column-reverse;
`;

export const ButtonBox = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.lila};
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
`;
