import React from 'react';
import { getQueryParams, queryParamsEventEmitter, setQueryParams } from 'react-use-query-param-string';
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

type ParsedQueryString = {
  readonly [key: string]: string | null;
};
type QueryArrayValue = readonly (string | null)[] | null | undefined;
type QueryMap<TGroupNames extends string = string> = {
  readonly [P in TGroupNames]: QueryArrayValue;
};

export function useQueryParamMap(): [QueryMap, (val: QueryMap) => void] {
  const [initialized, setInitialized] = React.useState(false);
  const [updateTime, setUpdateTime] = React.useState(0);
  const [value, setStateValue] = React.useState<ParsedQueryString>({});

  const toQueryString = (val: QueryMap): ParsedQueryString =>
    Object.keys(val).reduce((acc, key) => ({...acc, [key]: val[key]?.join(',')}), {});
  const fromQueryString = (val: ParsedQueryString): QueryMap =>
    Object.keys(val).reduce((acc, key) => ({...acc, [key]: val[key]?.split(',')}), {});

  const setValue = React.useCallback(
    (val: QueryMap) => {
      const newQuery = { ...getQueryParams() as ParsedQueryString, ...toQueryString(val) };
      Object.keys(newQuery).forEach(key => !newQuery[key] && delete newQuery[key])

      setStateValue(newQuery);
      setQueryParams(newQuery);
    },
    [],
  );

  const fetchValue = React.useCallback(() => {
    const queryParams = getQueryParams() as ParsedQueryString;
    setStateValue(queryParams);
  }, []);

  React.useEffect(() => {
    if (!initialized) {
      fetchValue();
      setInitialized(true);
    }
  }, [fetchValue, initialized]);

  React.useEffect(() => {
    if (updateTime > 0) {
      fetchValue();
    }
  }, [fetchValue, updateTime]);

  React.useEffect(() => {
    const updateListener = () => {
      setUpdateTime(Date.now());
    };
    queryParamsEventEmitter.addListener('update', updateListener);
    return () => {
      queryParamsEventEmitter.removeListener('update', updateListener);
    };
  }, []);

  return [fromQueryString(value), setValue];
}

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
