import { AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import IconButton from '@/components/IconButton';
import LinkWithQuery from '@/components/LinkWithQuery';
import useDeleteContact from '@/hooks/useDeleteContact';
import { IProps } from './ContactsListItem.types';
import { IconSizes, PagePaths, Positions } from '@/constants';
import { IconBtnType } from '@/constants';
import Image from 'next/image';
import css from './ContactsListItem.module.css';

const { contactsPath, contactPath } = PagePaths;

const ContactsListItem = ({ contact }: IProps) => {
  const { avatar, name, _id: id, role, phone, email, favorite } = contact;
  const { isLoading, setContactId } = useDeleteContact();
  const path = `${contactsPath}/${id}/${contactPath}`;

  const handleDelBtnClick = () => {
    setContactId(id as string);
  };

  return (
    <li className={css.item}>
      <LinkWithQuery href={path}>
        <div className={css.imageWrap}>
          <Image src={avatar as string} alt={name} className={css.image} />
          {favorite && <AiFillStar size={IconSizes.primaryIconSize} />}
        </div>
        <div className={css.infoWrap}>
          <div>
            <p className={`${css.name} trimText`}>{name}</p>
            {role && <p className={`${css.role} trimText`}>{role}</p>}
          </div>
          <p className={`${css.phone} trimText`}>{phone}</p>
          <p className={`${css.email} trimText`}>{email}</p>
        </div>
      </LinkWithQuery>
      <IconButton
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        onBtnClick={handleDelBtnClick}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
      />
    </li>
  );
};

export default ContactsListItem;
