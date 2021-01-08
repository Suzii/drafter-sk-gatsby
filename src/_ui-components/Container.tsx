import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

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

export const Main = styled.main`
  width: 100%;
`;

type SectionColor = 'primary' | 'white' | 'gray';
const translateSectionColor = (c: SectionColor | undefined, t: DefaultTheme): string => {
  switch (c) {
    case 'gray':
      return t.palette.common.lightGray;
    case 'primary':
      return t.palette.primary.main;
    case 'white':
      return t.palette.common.white;
    default:
      return 'inherit';
  }
};

export const Section = styled.section<{
  readonly isFullHeight?: boolean;
  readonly variant?: SectionColor;
}>`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 3rem;

  background-color: ${p => translateSectionColor(p.variant, p.theme)};

  ${p => p.isFullHeight && (
    `min-height: 100vh;`
  )}
  
  a {
    color: ${p => p.theme.palette.secondary.main};
  }
`;

export const SectionTitle = styled(({children, className, center = true, ...rest}) =>
  <Typography
    variant="h1"
    className={className}
    align={center ? "center" : "left"}
    {...rest}
  >
    {children}
  </Typography>
)`
  text-transform: uppercase;
  color: ${p => p.theme.palette.secondary.main};
  margin-bottom: 2rem;
`;
