import styled from 'styled-components';
import { IStyledProps } from './ModalForm.types';
import {
  setModalFormBackgroundColor,
  setModalFormBorderRadius,
  setModalFormBoxShadow,
  setModalFormMargin,
  setModalFormPadding,
  setModalFormWidth,
} from '@/utils';

export const Container = styled.div`
  display: flex;
  width: ${({ formType }: IStyledProps) => setModalFormWidth(formType)};
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  padding: ${({ formType }) => setModalFormPadding(formType)};
  background-color: ${({ formType }) => setModalFormBackgroundColor(formType)};
  border-radius: ${({ formType }) => setModalFormBorderRadius(formType)};
  box-shadow: ${({ formType }) => setModalFormBoxShadow(formType)};
  margin: ${({ formType }) => setModalFormMargin(formType)};
`;
