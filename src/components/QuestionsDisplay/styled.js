import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;
export const ItemContainer = styled.View`
  padding: 10px;
  margin: 10px;
  min-width: 300px;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.lila};
`;
export const TextCustom = styled.Text`
  font-size: 20px;
  color: white;
  padding: 4px;
`;
export const QuestionCustom = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.purple};
  padding: 4px;
`;
