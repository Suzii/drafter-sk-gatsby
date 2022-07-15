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
    <button
      className="z-50 fixed right-md bottom-md text-secondary bg-primary hover:bg-primary-lighter p-xs rounded-md"
      onClick={toggle}
    >
      {isOn
        ? (<><Icon type="x" />&nbsp;Schovať</>)
        : (<><Icon type="pencil" />&nbsp;Upraviť</>)
      }
    </button>
  );
};
