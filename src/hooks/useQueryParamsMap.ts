import React from 'react';
import { getQueryParams, queryParamsEventEmitter, setQueryParams } from 'react-use-query-param-string';

export type ParsedQueryString = {
  readonly [key: string]: string | null;
};
export type QueryArrayValue = readonly (string | null)[] | null | undefined;
export type QueryMap<TGroupNames extends string = string> = {
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
