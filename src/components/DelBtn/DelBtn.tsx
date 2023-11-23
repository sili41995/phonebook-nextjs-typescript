'use client';

import { deleteContact } from '@/app/lib/actions';
import contactsServiceApi from '@/service/contactsServiceApi';

const DelBtn = ({ contactId }) => {
  return (
    <form
      action={() => {
        deleteContact(contactId);
      }}
    >
      <button>Del</button>
    </form>
  );
};

export default DelBtn;
