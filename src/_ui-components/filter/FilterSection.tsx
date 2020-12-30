import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Term } from '../../models/taxonomies/_common';

type FilterSectionProps = {
  readonly selectedTerms: ReadonlyArray<string>;
  readonly onSelectedTermsChanged: (updateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>) => void;
  readonly filterName: string;
  readonly getTermName: (term: Term) => string;
  readonly allTerms: ReadonlyArray<Term>;
};

export const FilterSection: React.FC<FilterSectionProps> = ({
  filterName,
  getTermName,
  allTerms,
  selectedTerms,
  onSelectedTermsChanged,
}) => {
  const toggleTerm = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onSelectedTermsChanged(prevState =>
      prevState.includes(value)
        ? prevState.filter(c => c !== value)
        : [...prevState, value],
    );

  return (
    <FilterStyled>
      <Typography variant="h6" className="header">
        {filterName}
      </Typography>
      <div className="options">
        <ul>
          {allTerms.map(t => (
            <li key={t.codename}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name={t.codename}
                    value={t.codename}
                    id={t.codename}
                    checked={selectedTerms.includes(t.codename)}
                    onChange={toggleTerm}
                    color="secondary"
                  />
                }
                label={
                  <Typography variant="body2" component="span">
                    {getTermName(t)}
                  </Typography>
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  background-color: ${p => p.theme.palette.common.lightGray};
  margin-bottom: 20px;
  padding: 20px;

  .header {
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  .options {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        .PrivateSwitchBase-root-1 {
          padding: 4px;
        }
      }
    }
  }
`;
