import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
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

export const Main = styled.main`
  width: 100%;
`;

export const Section = styled.section<{
  readonly isFullHeight?: boolean;
  readonly isInverted?: boolean;
}>`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 3rem;

  background-color: ${p => p.isInverted ? p.theme.palette.primary.main : p.theme.palette.common.lightGray};

  ${p => p.isFullHeight && (
    `min-height: 100%;`
  )}
  
  a {
    color: ${p => p.theme.palette.secondary.main};
  }
`;

export const SectionTitle = styled(({children, className}) =>
  <Typography variant="h1" className={className}>{children}</Typography>
)`
  text-transform: uppercase;
  color: ${p => p.theme.palette.secondary.main};
`;
