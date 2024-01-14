import { FC } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
import { IconSizes } from '@/constants';
import { IProps } from './UserProfile.types';
import ImageContainer from '@/components/ImageContainer';
import { updateUserAvatar } from '@/app/lib/actions';
import css from './UserProfile.module.css';

const { secondaryIconSize } = IconSizes;

const UserProfile: FC<IProps> = ({ user }) => {
  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  return (
    <div className={css.container}>
      <p className={`${css.name} trimText`}>{name}</p>
      <div className={css.data}>
        <ImageContainer
          avatar={avatar}
          imgSize={150}
          updateAvatarFunc={updateUserAvatar}
        />
        <p className={`${css.fullName} trimText`}>{fullName}</p>
        <p className={`${css.email} trimText`}>{email}</p>
      </div>
      {(phone || dateOfBirth || location) && (
        <ul className={css.userInfo}>
          {dateOfBirth && (
            <li className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlEvent size={secondaryIconSize} />
              </span>
              <p className='trimText'>{dateOfBirth}</p>
            </li>
          )}
          {phone && (
            <li className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlPhone size={secondaryIconSize} />
              </span>
              <p className='trimText'>{phone}</p>
            </li>
          )}
          {location && (
            <li className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlLocationPin size={secondaryIconSize} />
              </span>
              <p className='trimText'>{location}</p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
