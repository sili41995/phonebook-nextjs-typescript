import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import css from './ContactDetails.module.css';
import getContactInfo from '@/utils/getContactInfo';
import getAvatar from '@/utils/getAvatar';
import contactNavLinks from '@/constants/contactNavLinks';
import ContactInfo from '@/components/ContactInfo';

const ContactDetails = ({ contact }) => {
  const { name, role, avatar } = getContactInfo(contact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <div className={css.container}>
      <Image
        className={css.avatar}
        src={userAvatar}
        alt={`${name} photo`}
        priority
      />
      <div className={css.infoWrap}>
        <p className={css.name}>{name}</p>
        <p className={css.role}>{role}</p>
      </div>
      <ContactInfo contact={contact} />
    </div>
  );
};

export default ContactDetails;
