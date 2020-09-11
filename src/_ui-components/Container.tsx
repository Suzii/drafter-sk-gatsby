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

  background-color: ${p => p.isInverted ? p.theme.colors.primary : p.theme.colors.lightGray}
  
  ${p => p.isFullHeight && (
    `min-height: 100%;`
  )}
`;

export const SectionTitle = styled.h1`
  text-align: center;
`;

//
// @media only screen and (max-width: 380px) {
// .col-xxs-12 {
//     flex-basis: 100%;
//     max-width: 100%;
//   }
// }
//
// dl.inline-flex {
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   width: 100%;
//   overflow: visible;
//
//   dt {
//     flex: 0 0 33.33%;
//     text-overflow: ellipsis;
//     overflow: hidden;
//   }
//
//   dd {
//     flex: 0 0 66.67%;
//     margin-left: auto;
//     text-align: left;
//     text-overflow: ellipsis;
//     overflow: hidden;
//   }
// }
