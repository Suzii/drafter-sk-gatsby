export const arrayIntersect = <T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): ReadonlyArray<T> =>
  a.filter(x => b.includes(x));
