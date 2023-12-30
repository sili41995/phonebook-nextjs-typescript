import { FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import ActionLink from '@/components/ActionLink';
import { IconBtnType, IconSizes } from '@/constants';
import { getPhoneNumber, getTelegramLink } from '@/utils';
import { FC } from 'react';
import css from './ContactInfo.module.css';
import { IProps } from './ContactInfo.types';

const ContactInfo: FC<IProps> = ({ contact }) => {
  const { phone, email, tgUsername, description } = contact;
  const phoneNumber = getPhoneNumber(phone);
  const telegramLink = getTelegramLink(tgUsername);

  return (
    <div className={css.container}>
      <div className={css.field}>
        <div className={css.infoWrap}>
          <p className={css.subtitle}>Phone number</p>
          <p className={`${css.description} trimText`}>{phone}</p>
        </div>
        <ActionLink
          link={`tel:${phoneNumber}`}
          btnType={IconBtnType.phone}
          icon={<FaPhoneAlt size={IconSizes.otherIconSize} />}
        />
      </div>
      {email && (
        <div className={css.field}>
          <div className={css.infoWrap}>
            <p className={css.subtitle}>Email Address</p>
            <p className={`${css.description} trimText`}>{email}</p>
          </div>
          <ActionLink
            link={`mailto:${email}`}
            btnType={IconBtnType.message}
            icon={<FaEnvelope size={IconSizes.otherIconSize} />}
          />
        </div>
      )}
      {tgUsername && (
        <div className={css.field}>
          <div className={css.infoWrap}>
            <p className={css.subtitle}>Username on Telegram</p>
            <p className={`${css.description} trimText`}>{tgUsername}</p>
          </div>
          <ActionLink
            link={`tg://resolve?domain=${telegramLink}`}
            btnType={IconBtnType.chat}
            icon={<FaRegComment size={IconSizes.otherIconSize} />}
          />
        </div>
      )}
      <div className={css.descWrap}>
        <p className={css.subtitle}>Description</p>
        <p className={css.description}>
          {description ? description : 'No description'}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
