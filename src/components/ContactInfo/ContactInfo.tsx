import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import getContactInfo from '@/utils/getContactInfo';
import css from './ContactInfo.module.css';
import getPhoneNumber from '@/utils/getPhoneNumber';
import ActionLink from '@/components/ActionLink';
import { IconBtnType } from '@/constants/iconBtnType';

const ContactInfo = ({ contact }) => {
  const { number, email, chat } = getContactInfo(contact);
  const phoneNumber = getPhoneNumber(number);

  return (
    <div className={css.container}>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Phone number</p>
          <p className={css.infoData}>{number}</p>
        </div>
        <ActionLink link={`tel:${phoneNumber}`} btnType={IconBtnType.phone}>
          <HiOutlinePhone />
        </ActionLink>
      </div>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Email Address</p>
          <p className={css.infoData}>{email}</p>
        </div>
        <ActionLink link={`mailto:${email}`} btnType={IconBtnType.message}>
          <IoMdMail />
        </ActionLink>
      </div>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Chat</p>
          <p className={css.infoData}>{chat}</p>
        </div>
        <ActionLink
          link={`tg://resolve?domain=${chat}`}
          btnType={IconBtnType.chat}
        >
          <RiChat1Line />
        </ActionLink>
      </div>
    </div>
  );
};

export default ContactInfo;
