import { Disclosure } from '@headlessui/react';
import React from 'react';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';
import { Icon } from '../Icon';
import { FilterTerm } from './Filters';

type FilterSectionProps = {
  readonly selectedTerms: ReadonlyArray<string>;
  readonly onSelectedTermsChanged: (updateCallback: (prev: ReadonlyArray<string>) => ReadonlyArray<string>) => void;
  readonly filterId: string;
  readonly filterName: string;
  readonly getTermName: (term: FilterTerm) => string;
  readonly allTerms: ReadonlyArray<FilterTerm>;
};

export const FilterSection: React.FC<FilterSectionProps> = ({
  filterId,
  filterName,
  getTermName,
  allTerms,
  selectedTerms,
  onSelectedTermsChanged,
}) => {
  const isSmallScreen = useIsSmallScreen();

  const toggleTerm = (value: string) =>
    onSelectedTermsChanged(prevState =>
      prevState.includes(value)
        ? prevState.filter(c => c !== value)
        : [...prevState, value],
    );

  return (
    <div className="bg-gray-100 px-sm py-sm">
      <Disclosure as="div" key={filterId} className="" defaultOpen={!isSmallScreen}>
        {({ open }) => (
          <>
            <h3 className="">
              <Disclosure.Button className="w-full flex items-center justify-between text-md text-secondary hover:text-secondary-dark">
                <span className="uppercase font-semibold flex">{filterName}</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <Icon type="minus" className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Icon type="plus" className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-sm">
              <div className="space-y-sm">
                {allTerms.map((t, optionIdx) => (
                  <div key={t.codename} className="flex items-center">
                    <input
                      id={`filter-${t.codename}-${optionIdx}`}
                      name={`${t.codename}[]`}
                      value={t.codename}
                      type="checkbox"
                      checked={selectedTerms.includes(t.codename)}
                      className="h-4 w-4 border-gray-300 text-secondary-lighter focus:ring-secondary-lighter"
                      onChange={(e) => { e.preventDefault(); toggleTerm(t.codename); }}
                    />
                    <label
                      htmlFor={`filter-${t.codename}-${optionIdx}`}
                      className="ml-sm text-sm text-gray-700"
                    >
                      {getTermName(t)}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
