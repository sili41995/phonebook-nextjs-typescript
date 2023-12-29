import { FC } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
import { IconSizes } from '@/constants';
import { IProps } from './UserProfile.types';
import ImageContainer from '@/components/ImageContainer';
import css from './UserProfile.module.css';

const UserProfile: FC<IProps> = ({ user }) => {
  if (!user) return <div className={css.container}></div>;

  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  return (
    <div className={css.container}>
      <p className={`${css.name} trimText`}>{name}</p>
      <div className={css.data}>
        <ImageContainer avatar={avatar} imgSize={150} />
        <p className={`${css.fullName} trimText`}>{fullName}</p>
        <p className={`${css.email} trimText`}>{email}</p>
      </div>
      {(phone || dateOfBirth || location) && (
        <div className={css.userInfo}>
          {dateOfBirth && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlEvent size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{dateOfBirth}</p>
            </div>
          )}
          {phone && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlPhone size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{phone}</p>
            </div>
          )}
          {location && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlLocationPin size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{location}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
