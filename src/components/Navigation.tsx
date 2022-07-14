import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Icon } from '../_ui-components/Icon';
import { Sitemap } from '../constants/urls';
import { isActive } from '../utils/urlUtils';
import { Logo, LogoType } from './Logo';

export const Navigation: React.FC<{ readonly sitemap: Sitemap }> = (props) => {
  const navigation = props.sitemap.filter(s => s.isVisible && !s.isIndex);

  return (
    <Disclosure as="nav" className="max-h-navHeight bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 text-secondary hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-light">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icon type="x" className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Icon type="menu" className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <Logo
                      variant={LogoType.Full}
                      className="block h-12 w-auto fill-current text-secondary"
                    />
                  </Link>
                </div>
              </div>
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      !item.isButton
                        ? (
                          <Link
                            key={item.title}
                            to={item.url}
                            className={classNames(
                              isActive(item.url) ? 'text-secondary' : 'text-secondary-darker hover:text-secondary-dark',
                              'uppercase px-3 py-2 text-md font-headings font-bold',
                            )}
                            aria-current={isActive(item.url) ? 'page' : undefined}
                          >
                            {item.title}
                          </Link>
                        )
                        : (
                          <Link
                            key={item.title}
                            to={item.url}
                            className={classNames(
                              isActive(item.url) ? 'bg-secondary-dark text-primary' : 'hover:bg-secondary-darker hover:text-primary',
                              'uppercase bg-secondary px-3 py-2 text-md text-primary font-headings font-bold hover:no-inderline',
                            )}
                            aria-current={isActive(item.url) ? 'page' : undefined}
                          >
                            {item.title}
                          </Link>
                        ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as={Link}
                  to={item.url}
                  className={classNames(
                    isActive(item.url) ? 'bg-secondary text-primary' : 'text-secondary hover:bg-secondary-lighter hover:text-primary',
                    'uppercase block px-3 py-2 text-base font-headings font-bold',
                  )}
                  aria-current={isActive(item.url) ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
