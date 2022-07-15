import React from 'react';
import { useQueryParamMap } from '../../hooks/useQueryParamsMap';
import { FilterSection } from './FilterSection';

export type FilterTerm = {
  readonly codename: string;
  readonly name: string;
};

export type FilterConfig<TGroupNames extends string> = {
  readonly groupName: string;
  readonly groupCodename: TGroupNames;
  readonly allTerms: ReadonlyArray<FilterTerm>;
};

export type FiltersConfig<TGroupNames extends string> = ReadonlyArray<FilterConfig<TGroupNames>>;

type FiltersProps<TGroupNames extends string> = {
  readonly filters: FiltersConfig<TGroupNames>;
};

export type SelectedTermsByGroup<TGroupNames extends string> = {
  readonly [P in TGroupNames]: ReadonlyArray<string>;
};

export const useFilterQuery = <TGroupNames extends string>(filters: FiltersConfig<TGroupNames>): readonly [
  SelectedTermsByGroup<TGroupNames>,
  (groupCodename: TGroupNames, termsUpdateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>) => void
] => {
  const [queryParams, updateQueryParams] = useQueryParamMap();

  const currentFilter: SelectedTermsByGroup<TGroupNames> = filters
    .map(f => f.groupCodename)
    .reduce((acc, groupName) =>
      ({
        ...acc,
        [groupName]: queryParams[groupName] ?? []}),
    {} as SelectedTermsByGroup<TGroupNames>);

  const onSelectedTermsChanged = (
    groupCodename: TGroupNames,
    termsUpdateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>,
  ) => updateQueryParams( {
    ...currentFilter,
    [groupCodename]: termsUpdateCallback(currentFilter[groupCodename] ?? [])
  });

  return [currentFilter, onSelectedTermsChanged];
};

export const Filters = <TGroupNames extends string>({ filters }: FiltersProps<TGroupNames>) => {
  const [selectedTermsByGroup, onSelectedTermsChanged] = useFilterQuery<TGroupNames>(filters);

  return (
    <div className="flex flex-col space-y-sm">
      {filters.map(f => (
        <div key={f.groupCodename}>
          <FilterSection
            key={f.groupCodename}
            selectedTerms={selectedTermsByGroup[f.groupCodename]}
            onSelectedTermsChanged={(termUpdateCallback) => onSelectedTermsChanged(f.groupCodename, termUpdateCallback)}
            filterId={f.groupCodename}
            filterName={f.groupName}
            getTermName={(t) => t.name}
            allTerms={f.allTerms}
          />
        </div>
      ))}
    </div>
  );
};
