import { DefaultValues } from '@/constants/defaultValues';
import getAvatar from './getAvatar';

const getUserInfo = (user) => {
  const {
    name,
    lastName,
    email,
    avatar,
    dateOfBirth = DefaultValues.dateOfBirth,
    phoneNumber = DefaultValues.phoneNumber,
    location = DefaultValues.location,
  } = user;
  const userName = lastName ? `${name} ${lastName}` : `${name}`;
  const userAvatar = getAvatar.getUserAvatar(avatar);

  return {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  };
};

export default getUserInfo;
