import React, { FC } from 'react';
import { IProps } from './Container.types';

const Container: FC<IProps> = ({ children }) => (
  <div className='container'>{children}</div>
);

export default Container;
