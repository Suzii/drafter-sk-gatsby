import { SvgIconComponent } from '@material-ui/icons';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Group from '@material-ui/icons/Group';
import ThumbUp from '@material-ui/icons/ThumbUp';
import React from 'react';

export type IconType =
  'contact-person' |
  'adress' |
  'phone' |
  'experience' |
  'customers' |
  'fair-approach';

const mapToIcon = (type: IconType): SvgIconComponent | null => {
  switch (type) {
    case 'customers':
      return Group;
    case 'experience':
      return AccountBalance;
    case 'fair-approach':
      return ThumbUp;

    default:
      return null;
  }
};

export const Icon: React.FC<{
  readonly type: IconType;
  readonly fontSize?: 'inherit' | 'default' | 'small' | 'large';
  readonly color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
}> = ({type, ...otherProps}) => {
  const MappedIcon = mapToIcon(type);

  return MappedIcon && <MappedIcon {...otherProps} />;
};
