import Image from 'next/image';
import css from './ContactDetails.module.css';
import getContactInfo from '@/utils/getContactInfo';
import getAvatar from '@/utils/getAvatar';
import ContactInfo from '@/components/ContactInfo';
import { IProps } from './ContactDetails.types';
import { CiEdit } from 'react-icons/ci';
import Link from 'next/link';
import DelBtn from '@/components/DelBtn';
import { IconBtnType } from '@/constants/iconBtnType';
import DefaultMessage from '@/components/DefaultMessage';
import GoBackBtn from '@/components/GoBackBtn';

const ContactDetails = ({ contact }: IProps) => {
  const { name, role, avatar, id } = getContactInfo(contact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <div className={css.container}>
      {id ? (
        <>
          <div className={css.buttonsContainer}>
            <GoBackBtn title='<-- Go Back' />
            <div>
              <DelBtn
                contactId={id as string}
                width={50}
                btnType={IconBtnType.delete}
              />
              <Link href={`/contacts/${id}/edit`} className={css.navLink}>
                <CiEdit />
              </Link>
            </div>
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
        </>
      ) : (
        <DefaultMessage message='Contact is absent' />
      )}
    </div>
  );
};

export default ContactDetails;
