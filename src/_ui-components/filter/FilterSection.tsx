import React, { ChangeEvent } from 'react';
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
    <>
      <div className="filter__header">{filterName}</div>
      <div className="filter__options">
        <ul>
          {allTerms.map(t => (
            <li key={t.codename}>
              <input
                type="checkbox"
                className="form-check-input"
                id={t.codename}
                value={t.codename}
                checked={selectedTerms.includes(t.codename)}
                onChange={toggleTerm}
              />
              <label
                htmlFor={t.codename}
                className="form-check-label"
              >
                {getTermName(t)}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
