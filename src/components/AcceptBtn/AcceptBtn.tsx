import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IProps } from './AcceptBtn.types';
import IconButton from '@/components/IconButton';
import { BtnType, IconBtnType, IconSizes } from '@/constants';
import AriaLabels from '@/constants/ariaLabels';

const AcceptBtn: FC<IProps> = ({ disabled = false }) => (
  <IconButton
    disabled={disabled}
    btnType={IconBtnType.accept}
    type={BtnType.submit}
    icon={<FaCheck size={IconSizes.primaryIconSize} />}
    aria-label={AriaLabels.accept}
  />
);

export default AcceptBtn;
