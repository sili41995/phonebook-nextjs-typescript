// import { useOutletContext } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
// import { IContact } from 'types/types';
import ActionLink from '@/components/ActionLink';
import { IconBtnType, IconSizes } from '@/constants';
import { getPhoneNumber, getTelegramLink } from '@/utils';
import { FC } from 'react';
import css from './ContactInfo.module.css';
import { IProps } from './ContactInfo.types';

const ContactInfo: FC<IProps> = ({ contact }) => {
  const { phone, email, tgUsername } = contact;
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
      {/* 
      {email && (
        <Field>
          <Info>
            <Title>Email Address</Title>
            <Description>{email}</Description>
          </Info>
          <ActionLink
            link={`mailto:${email}`}
            btnType={IconBtnType.message}
            icon={<FaEnvelope size={IconSizes.otherIconSize} />}
          />
        </Field>
      )}
      {tgUsername && (
        <Field>
          <Info>
            <Title>Username on Telegram</Title>
            <Description>{tgUsername}</Description>
          </Info>
          <ActionLink
            link={`tg://resolve?domain=${telegramLink}`}
            btnType={IconBtnType.chat}
            icon={<FaRegComment size={IconSizes.otherIconSize} />}
          />
        </Field>
      )} */}
    </div>
  );
};

export default ContactInfo;
