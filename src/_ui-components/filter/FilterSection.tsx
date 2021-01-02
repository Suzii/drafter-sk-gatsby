import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';
import { FilterTerm } from './Filters';

type FilterSectionProps = {
  readonly selectedTerms: ReadonlyArray<string>;
  readonly onSelectedTermsChanged: (updateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>) => void;
  readonly filterName: string;
  readonly getTermName: (term: FilterTerm) => string;
  readonly allTerms: ReadonlyArray<FilterTerm>;
};

export const FilterSection: React.FC<FilterSectionProps> = ({
  filterName,
  getTermName,
  allTerms,
  selectedTerms,
  onSelectedTermsChanged,
}) => {
  const [isOpen, setIsOpen] = useState(!useIsSmallScreen());

  const toggleTerm = (value: string) =>
    onSelectedTermsChanged(prevState =>
      prevState.includes(value)
        ? prevState.filter(c => c !== value)
        : [...prevState, value],
    );

  return (
    <FilterStyled>
      <List dense disablePadding subheader={(
        <Typography variant="h6" component="div" className="header" onClick={() => setIsOpen(!isOpen)}>
          {filterName}
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </Typography>
      )}>
        <Collapse in={isOpen} timeout="auto">
          {allTerms.map(t => (
            <ListItem key={t.codename} role={undefined} dense button onClick={() => toggleTerm(t.codename)}>
              <ListItemIcon>
                <Checkbox
                  size="small"
                  edge="start"
                  name={t.codename}
                  value={t.codename}
                  id={t.codename}
                  checked={selectedTerms.includes(t.codename)}
                  inputProps={{ 'aria-labelledby': t.codename }}
                />
              </ListItemIcon>
              <ListItemText id={t.codename} primary={getTermName(t)} />
            </ListItem>
          ))}
        </Collapse>
      </List>
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  background-color: ${p => p.theme.palette.common.lightGray};
  padding: 1rem;

  .header {
    text-transform: uppercase;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .MuiCheckbox-root {
    padding: 4px;
  }

  .MuiListItemIcon-root {
    min-width: 0;
  }
`;
