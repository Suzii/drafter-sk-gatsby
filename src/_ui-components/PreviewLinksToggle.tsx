import KontentSmartLink from '@kentico/kontent-smart-link';
import { Button, IconButton } from '@material-ui/core';
import { Cancel, Edit } from '@material-ui/icons';
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
      <IconButton color="primary">
        {isOn ? <Cancel /> : <Edit />}
      </IconButton>
    </PreviewLinksToggleStyled>
  );
};

const PreviewLinksToggleStyled = styled.div`
  z-index: ${p => p.theme.zIndex.snackbar};
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  text-transform: uppercase;
`;
