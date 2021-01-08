import KontentSmartLink from '@kentico/kontent-smart-link';
import { IconButton } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StringParam, useQueryParams } from 'use-query-params';

const queryParam = 'preview';

export const KontentSmartLinksToggle: React.FC = () => {
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
    <ToggleStyled onClick={toggle}>
      <IconButton color="primary">
        {isOn ? <Close /> : <Edit />}
      </IconButton>
    </ToggleStyled>
  );
};

const ToggleStyled = styled.div`
  z-index: ${p => p.theme.zIndex.snackbar};
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  text-transform: uppercase;
  background-color: ${p => p.theme.palette.secondary.main};
  border-radius: 50%;
`;
