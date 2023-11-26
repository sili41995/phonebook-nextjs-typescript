import Image from 'next/image';
import css from './ContactDetails.module.css';
import getContactInfo from '@/utils/getContactInfo';
import getAvatar from '@/utils/getAvatar';
import ContactInfo from '@/components/ContactInfo';
import { IProps } from './ContactDetails.types';
import ActionLink from '../ActionLink';
import { IconBtnType } from '@/constants/iconBtnType';
import { CiEdit } from 'react-icons/ci';

const ContactDetails = ({ contact }: IProps) => {
  const { name, role, avatar } = getContactInfo(contact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <div className={css.container}>
      <div className={css.buttonsContainer}>
        <ActionLink
          link={`/contacts/${contact.id}/edit`}
          btnType={IconBtnType.edit}
        >
          <CiEdit />
        </ActionLink>
        {/* {!editContact && (
          <IconButton
            disabled={isLoading}
            btnType={iconBtnType.delete}
            width={44}
            height={35}
            icon={<AiOutlineDelete size={iconSizes.primaryIconSize} />}
            onBtnClick={() => {
              deleteContact(id);
            }}
          />
        )}
        <IconButton
          btnType={iconBtnType.edit}
          width={44}
          height={35}
          onBtnClick={handleEditBtnClick}
          icon={<CiEdit size={iconSizes.primaryIconSize} />}
        /> */}
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
