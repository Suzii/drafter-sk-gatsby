import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div<{size?: number}>`
  flex: ${props => props.size};
`;


