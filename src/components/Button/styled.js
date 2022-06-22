import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: column-reverse;
  margin: 10px;
`;

export const ButtonBox = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.purple};
  width: 100px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;
