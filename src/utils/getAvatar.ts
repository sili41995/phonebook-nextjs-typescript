import defaultUserAvatar from '@/images/default-user-avatar.jpg';
import defaultContactAvatar from '@/images/default-contact-avatar.jpg';

const getUserAvatar = (avatar) => (avatar ? avatar : defaultUserAvatar);

const getContactAvatar = (avatar) => (avatar ? avatar : defaultContactAvatar);

const getAvatar = { getUserAvatar, getContactAvatar };

export default getAvatar;
