import KontentSmartLink from '@kentico/kontent-smart-link';
import React, { useEffect } from 'react';
import { StringParam, useQueryParams } from 'use-query-params';
import { Icon } from '../Icon';

const queryParam = 'preview';

export const KontentSmartLinksToggle: React.FC = () => {
  useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam,
    });
    return () => {
      kontentSmartLink.destroy();
    };
  }, []);

  const [values, setValues] = useQueryParams({ [queryParam]: StringParam });

  const isOn = values[queryParam] !== undefined;
  const toggle = () => setValues({ [queryParam]: isOn ? undefined : null }, 'pushIn');

  return (
    <div
      className="z-50 fixed right-md bottom-md"
      onClick={toggle}
    >
      <button color="primary p-md">
        {isOn ? <Icon type="x" /> : <Icon type="pencil" />}
      </button>
    </div>
  );
};
