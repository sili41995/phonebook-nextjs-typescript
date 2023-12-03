import Image from 'next/image';
import css from './UserProfile.module.css';
import getUserInfo from '@/utils/getUserInfo';
import { IProps } from './UserProfile.types';

const UserProfile = ({ user }: IProps) => {
  const {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  } = getUserInfo(user);

  return (
    <div className={css.container}>
      <p className={css.name}>{name}</p>
      <div className={css.data}>
        <Image
          className={css.avatar}
          src={userAvatar}
          alt='user avatar'
          priority
        />
        <p className={css.fullName}>{userName}</p>
        <p className={css.email}>{email}</p>
      </div>
      <div>
        <div className={css.info}>
          <span className={css.iconWrap}></span>
          {dateOfBirth}
        </div>
        <div className={css.info}>
          <span className={css.iconWrap}></span>
          {phoneNumber}
        </div>
        <div className={css.info}>
          <span className={css.iconWrap}>{/* <SlLocationPin /> */}</span>
          {location}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
