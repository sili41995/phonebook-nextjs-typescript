// import { useSelector } from 'react-redux';
// import { AiOutlineDelete } from 'react-icons/ai';
// import IconButton from '@/components/IconButton';
// import { pagesPath, iconBtnType, iconSizes } from '@/constants';
// import { useDeleteContact } from '@/hooks';
// import { selectIsLoading } from '@/redux/contacts/selectors';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
import css from './ContactsListItem.module.css';
import Image from 'next/image';
import getContactInfo from '@/utils/getContactInfo';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  // const isLoading = useSelector(selectIsLoading);
  // const deleteContact = useDeleteContact();
  // const searchParams = useSearchParams();

  return (
    contact && (
      <li className={css.contactItem}>
        <Link className={css.contactLink} href={id}>
          <Image className={css.avatar} src={userAvatar} alt={name} priority />
          <div className={css.infoWrap}>
            <div>
              <p className={css.name}>{name}</p>
              <p className={css.role}>{role}</p>
            </div>
            <p className={css.phone}>{number}</p>
            <p className={css.email}>{email}</p>
          </div>
        </Link>
        {/* <IconButton
          top={0}
          right={0}
          position='absolute'
          disabled={isLoading}
          btnType={iconBtnType.deleteTransparent}
          width={44}
          height={35}
          icon={<AiOutlineDelete size={iconSizes.primaryIconSize} />}
          onBtnClick={() => {
            deleteContact(id);
          }}
        /> */}
      </li>
    )
  );
};

export default ContactsListItem;
