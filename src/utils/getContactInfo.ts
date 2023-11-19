import { DefaultValues } from '@/constants/defaultValues';
import getAvatar from '@/utils/getAvatar';

const getContactInfo = (contact = {}) => {
  const {
    id,
    name,
    number,
    avatar,
    role = DefaultValues.role,
    email = DefaultValues.email,
    chat = DefaultValues.chat,
    description = DefaultValues.description,
  } = contact;
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return { userAvatar, name, id, role, number, email, chat, description };
};

export default getContactInfo;
