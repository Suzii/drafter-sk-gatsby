import KontentSmartLink from '@kentico/kontent-smart-link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StringParam, useQueryParams } from 'use-query-params';

const queryParam = 'preview';

export const PreviewLinksToggle: React.FC = () => {
  useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam,
    });
    return () => {
      kontentSmartLink.destroy();
    };
  }, []);

  const [values, setValues] = useQueryParams({ [queryParam]: StringParam });

  const isOn = values[queryParam] !== undefined;
  const toggle = () => setValues({ [queryParam]: isOn ? undefined : null }, 'pushIn');

  return (
    <PreviewLinksToggleStyled onClick={toggle}>
      {isOn ? 'Disable edit' : 'Enable edit'}
    </PreviewLinksToggleStyled>
  );
};

const PreviewLinksToggleStyled = styled.button`
  z-index: ${p => p.theme.zIndex.snackbar};
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  text-transform: uppercase;
  background-color: ${p => p.theme.palette.common.lighterGray};
  opacity: 0.8;
  border-radius: 0.3rem;
  border: 0;
  color: ${p => p.theme.palette.common.black};
  padding: 0.4rem 0.4rem;
  text-decoration: none;

  &:hover {
    background-color: ${p => p.theme.palette.primary.main};
    opacity: 0.8;
    color: ${p => p.theme.palette.secondary.main};
  }
`;
