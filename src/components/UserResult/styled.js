import styled from 'styled-components/native';

export const CardContainer = styled.View`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: aliceblue;
`;
export const TextCustom = styled.Text`
  color: ${({ theme }) => theme.purple};
  font-size: 30;
`;
