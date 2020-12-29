import { ContentItem, MultipleItemQuery } from '@kentico/kontent-delivery';
import React from 'react';
import { ObjectParam, useQueryParam } from 'use-query-params';
import { Term } from '../../models/taxonomies/_common';
import { FilterSection } from './FilterSection';

export type FilterConfig = {
  readonly groupName: string;
  readonly groupCodename: string;
  readonly allTerms: ReadonlyArray<Term>;
};

export type FiltersConfig = ReadonlyArray<FilterConfig>;

type FiltersProps = {
  readonly filters: FiltersConfig;
};

export type SelectedTermsByGroup<T extends string = string> = Record<T, ReadonlyArray<string>>;

const getArrayFromQueryParam = (value: string[] | string | null | undefined): ReadonlyArray<string> => {
  if (!value) {
    return [];
  }

  return Array.isArray(value)
    ? value as string[]
    : (value as string).split(',');
};

const parseFiltersFromQuery = (filters: FiltersConfig, query: Record<string, string | string[] | undefined>): SelectedTermsByGroup =>
  filters.reduce(
    (acc, nextGroup) => ({
      ...acc,
      [nextGroup.groupCodename]: getArrayFromQueryParam(query[nextGroup.groupCodename]),
    }),
    {},
  );

const encodeSelectedFiltersToQueryObject = (selectedTermsByGroup: SelectedTermsByGroup): Record<string, string> =>
  Object.keys(selectedTermsByGroup).reduce((acc, nextGroup) => ({
    ...acc,
    [nextGroup]: encodeURI(selectedTermsByGroup[nextGroup].join(',')),
  }), {});

export const useSelectedTaxonomies = <TGroupNames extends string>(filters: FiltersConfig) => {
  const [filtersQuery] = useQueryParam(filterName, ObjectParam);
  return parseFiltersFromQuery(filters, filtersQuery ?? {});
};

const filterName = 'q';

export const Filters: React.FC<FiltersProps> = ({ filters }) => {
  const [filtersQuery, setFiltersQuery] = useQueryParam(filterName, ObjectParam);
  const selectedTermsByGroup = parseFiltersFromQuery(filters, filtersQuery ?? {});

  const onSelectedTermsChanged = (
    groupCodename: string,
    termsUpdateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>,
  ) => {
    const newFilter = {
      ...selectedTermsByGroup,
      [groupCodename]: termsUpdateCallback(selectedTermsByGroup[groupCodename]),
    };

    setFiltersQuery(encodeSelectedFiltersToQueryObject(newFilter), 'pushIn');
  };

  return (
    <div className="filter">
      {filters.map(f => (
        <FilterSection
          key={f.groupCodename}
          selectedTerms={selectedTermsByGroup[f.groupCodename]}
          onSelectedTermsChanged={(termUpdateCallback) => onSelectedTermsChanged(f.groupCodename, termUpdateCallback)}
          filterName={f.groupName}
          getTermName={(t) => t.name}
          allTerms={f.allTerms}
        />
      ))}
    </div>
  );
};
