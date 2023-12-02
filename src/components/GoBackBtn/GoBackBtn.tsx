'use client';

import { useRouter } from 'next/navigation';
import IconButton from '@/components/IconButton';

const GoBackBtn = ({ title = 'Cancel' }) => {
  const router = useRouter();

  const onCancelBtnClick = () => {
    router.back();
  };

  return <IconButton onBtnClick={onCancelBtnClick}>{title}</IconButton>;
};

export default GoBackBtn;
