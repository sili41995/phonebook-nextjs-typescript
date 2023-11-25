import defaultUserAvatar from '@/images/default-user-avatar.jpg';
import defaultContactAvatar from '@/images/default-contact-avatar.jpg';
import { StaticImageData } from 'next/image';

const getUserAvatar = (avatar: string | undefined): string | StaticImageData =>
  avatar ? avatar : defaultUserAvatar;

const getContactAvatar = (
  avatar: string | undefined
): string | StaticImageData => (avatar ? avatar : defaultContactAvatar);

const getAvatar = { getUserAvatar, getContactAvatar };

export default getAvatar;
