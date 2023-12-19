import { BtnType } from '@/constants';
import { IProps } from './IconButton.types';

const { button } = BtnType;

const IconButton = ({ icon, onBtnClick, title, type = button }: IProps) => {
  const btnChildren = title ? (
    <>
      {icon}
      {title}
    </>
  ) : (
    icon
  );

  return (
    <button type={type} onClick={onBtnClick}>
      {btnChildren}
    </button>
  );
};

export default IconButton;
