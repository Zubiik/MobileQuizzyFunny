import styled from 'styled-components/native';

export const CardContainer = styled.View`
  height: 150px;
  width: 150px;
  margin: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.green};
  align-items: center;
  justify-content: center;
`;
export const CardText = styled.Text`
  font-size: 30px;
  padding: 10px;
  color: ${({ theme }) => theme.purple};
`;
