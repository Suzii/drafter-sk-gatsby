import KontentSmartLink from '@kentico/kontent-smart-link';
import React, { useEffect } from 'react';
import { useQueryParamString } from 'react-use-query-param-string';
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

  const [value, setValue] = useQueryParamString(queryParam, 'false');

  const isOn = value === 'true';
  const toggle = () => setValue(isOn ? 'false' : 'true');

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
