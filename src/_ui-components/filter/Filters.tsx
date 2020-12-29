import React from 'react';
import { ArrayParam, useQueryParams } from 'use-query-params';
import { Term } from '../../models/taxonomies/_common';
import { FilterSection } from './FilterSection';

export type FilterConfig<TGroupNames extends string> = {
  readonly groupName: string;
  readonly groupCodename: TGroupNames;
  readonly allTerms: ReadonlyArray<Term>;
};

export type FiltersConfig<TGroupNames extends string> = ReadonlyArray<FilterConfig<TGroupNames>>;

type FiltersProps<TGroupNames extends string> = {
  readonly filters: FiltersConfig<TGroupNames>;
};

export type SelectedTermsByGroup<TGroupNames extends string> = {
  [P in TGroupNames]: ReadonlyArray<string>;
};

type QueryArrayValue = (string | null)[] | null | undefined;
type QueryMap<TGroupNames extends string> = {
  [P in TGroupNames]: QueryArrayValue;
};
const fixArrayType = (value: QueryArrayValue): ReadonlyArray<string> =>
  !value || !Array.isArray(value)
    ? []
    : value.filter(x => !!x) as string[];

const parseFiltersFromQuery = <TGroupNames extends string>(filters: FiltersConfig<TGroupNames>, query: QueryMap<TGroupNames>): SelectedTermsByGroup<TGroupNames> =>
  filters.reduce((acc, nextGroup) =>
      ({ ...acc, [nextGroup.groupCodename]: fixArrayType(query[nextGroup.groupCodename]) }),
    {} as any,
  );

export const useFilterQuery = <TGroupNames extends string>(filters: FiltersConfig<TGroupNames>) => {
  const queryParamsMap = filters.map(f => f.groupCodename).reduce((acc, groupName) =>
      ({ ...acc, [groupName]: ArrayParam }),
    {});

  const [filtersQuery, setFiltersQuery] = useQueryParams(queryParamsMap);
  const selectedTermsByGroup = parseFiltersFromQuery(filters, filtersQuery as QueryMap<TGroupNames>);

  const onSelectedTermsChanged = (
    groupCodename: TGroupNames,
    termsUpdateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>,
  ) => {
    const newFilter = {
      ...selectedTermsByGroup,
      [groupCodename]: termsUpdateCallback(selectedTermsByGroup[groupCodename]),
    };
    setFiltersQuery(newFilter, 'pushIn');
  };

  return [selectedTermsByGroup, onSelectedTermsChanged] as const;
};

export const Filters = <TGroupNames extends string>({ filters }: FiltersProps<TGroupNames>) => {
  const [selectedTermsByGroup, onSelectedTermsChanged] = useFilterQuery<TGroupNames>(filters);

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
