import { ChangeEvent } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { IAvatar } from '@/types/types';

export interface IProps {
  isLoading: boolean;
  avatar: FileList | null;
  handleFormSubmit: SubmitHandler<IAvatar>;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancelBtnClick: () => void;
}
