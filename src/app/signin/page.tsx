import { FC } from 'react';
import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import Container from '@/components/Container';
import { FormTypes } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Page for sign in user',
};

const SignInPage: FC = () => (
  <Container>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </Container>
);

export default SignInPage;
