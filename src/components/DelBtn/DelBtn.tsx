'use client';

import { deleteContact } from '@/app/lib/actions';
import IconButton from '@/components/IconButton';
import { IconSizes } from '@/constants/iconSizes';
import { AiOutlineDelete } from 'react-icons/ai';
import { IProps } from './DelBtn.types';
import { BtnTypes } from '@/types/types';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import toasts from '@/utils/toasts';

const DelBtn = ({ contactId, width, height, btnType }: IProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { handleSubmit } = useForm<{}>();

  const handleFormSubmit: SubmitHandler<{}> = async () => {
    try {
      await deleteContact(contactId);
      if (pathname.includes(contactId)) {
        router.push('/contacts');
      }
    } catch (error) {
      toasts.errorToast('Deleting a contact failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <IconButton
        btnType={btnType}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
        width={width}
        height={height}
        type={BtnTypes.submit}
      />
    </form>
  );
};

export default DelBtn;
