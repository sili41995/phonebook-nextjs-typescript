import Image from 'next/image';
import css from './ContactDetails.module.css';
import getContactInfo from '@/utils/getContactInfo';
import getAvatar from '@/utils/getAvatar';
import ContactInfo from '@/components/ContactInfo';
import { IProps } from './ContactDetails.types';
import { CiEdit } from 'react-icons/ci';
import Link from 'next/link';
import DelBtn from '../DelBtn';
import { IconBtnType } from '@/constants/iconBtnType';

const ContactDetails = ({ contact }: IProps) => {
  const { name, role, avatar, id } = getContactInfo(contact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <div className={css.container}>
      <div className={css.buttonsContainer}>
        <DelBtn
          contactId={id as string}
          width={50}
          btnType={IconBtnType.delete}
        />
        <Link href={`/contacts/${id}/edit`}>
          <CiEdit />
        </Link>
      </div>
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
