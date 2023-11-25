'use client';

import { deleteContact } from '@/app/lib/actions';
import IconButton from '@/components/IconButton';
import { IconBtnType } from '@/constants/iconBtnType';
import { IconSizes } from '@/constants/iconSizes';
import { AiOutlineDelete } from 'react-icons/ai';
import { IProps } from './DelBtn.types';

const DelBtn = ({ contactId }: IProps) => {
  return (
    <form
      action={() => {
        deleteContact(contactId);
      }}
    >
      <IconButton
        btnType={IconBtnType.deleteTransparent}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
        width={44}
        height={35}
      />
    </form>
  );
};

export default DelBtn;
