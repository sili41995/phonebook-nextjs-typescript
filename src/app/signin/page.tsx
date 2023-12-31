import { FC } from 'react';
import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Page for sign in user',
};

const SignInPage: FC = () => (
  <div className='container'>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </div>
);

export default SignInPage;
