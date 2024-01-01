import { IAvatar } from '@/types/types';

export interface IProps {
  avatar: string;
  imgSize: number;
  updateAvatarFunc: (data: FormData) => Promise<IAvatar>;
}
