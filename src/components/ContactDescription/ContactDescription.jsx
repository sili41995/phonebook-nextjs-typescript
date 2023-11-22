'use client';

import { useTargetContact } from '@/hooks';
import { getContactInfo } from '@/utils';
import css from './ContactDescription.module.css';

const ContactDescription = () => {
  const targetContact = useTargetContact();
  const { description } = getContactInfo(targetContact);

  return <p className={css.description}>{description}</p>;
};

export default ContactDescription;
