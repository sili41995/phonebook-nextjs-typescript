import { FC } from 'react';
import { FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import ActionLink from '@/components/ActionLink';
import { IconBtnType, IconSizes } from '@/constants';
import { getPhoneNumber, getTelegramLink } from '@/utils';
import css from './ContactInfo.module.css';
import { IProps } from './ContactInfo.types';
import AriaLabels from '@/constants/ariaLabels';

const { phone: phoneBtn, message, chat } = IconBtnType;
const { otherIconSize } = IconSizes;

const ContactInfo: FC<IProps> = ({ contact }) => {
  const { phone, email, tgUsername, description } = contact;
  const phoneNumber = getPhoneNumber(phone);
  const telegramLink = getTelegramLink(tgUsername);

  return (
    <div className={css.container}>
      <ul className={css.btnList}>
        <li className={css.field}>
          <div className={css.infoWrap}>
            <p className={css.subtitle}>Phone number</p>
            <p className={`${css.description} trimText`}>{phone}</p>
          </div>
          <ActionLink
            link={`tel:${phoneNumber}`}
            btnType={phoneBtn}
            aria-label={AriaLabels.call}
            icon={<FaPhoneAlt size={otherIconSize} />}
          />
        </li>
        {email && (
          <li className={css.field}>
            <div className={css.infoWrap}>
              <p className={css.subtitle}>Email Address</p>
              <p className={`${css.description} trimText`}>{email}</p>
            </div>
            <ActionLink
              link={`mailto:${email}`}
              btnType={message}
              aria-label={AriaLabels.sendEmail}
              icon={<FaEnvelope size={otherIconSize} />}
            />
          </li>
        )}
        {tgUsername && (
          <li className={css.field}>
            <div className={css.infoWrap}>
              <p className={css.subtitle}>Username on Telegram</p>
              <p className={`${css.description} trimText`}>{tgUsername}</p>
            </div>
            <ActionLink
              link={`tg://resolve?domain=${telegramLink}`}
              btnType={chat}
              aria-label={AriaLabels.tgAccount}
              icon={<FaRegComment size={otherIconSize} />}
            />
          </li>
        )}
      </ul>
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
