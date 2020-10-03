import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faAddressCard,
  faEnvelope,
  faHandshake,
  faPhone,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';

export type IconType =
  'contact-person' |
  'address' |
  'phone' |
  'email' |
  'experience' |
  'customers' |
  'fair-approach';

const mapToIcon = (type: IconType): IconDefinition | null => {
  switch (type) {
    case 'customers':
      return faUsers;
    case 'experience':
      return faThumbsUp;
    case 'fair-approach':
      return faHandshake;
    case 'phone':
      return faPhone;
    case 'email':
      return faEnvelope;
    case 'contact-person':
      return faAddressCard;
    default:
      return null;
  }
};

export const Icon: React.FC<Omit<FontAwesomeIconProps, 'icon'> & {
  readonly type: IconType;
}> = ({ type, ...otherProps }) => {
  const iconDefinition = mapToIcon(type);

  return iconDefinition && <FontAwesomeIcon icon={iconDefinition} {...otherProps} />;
};
