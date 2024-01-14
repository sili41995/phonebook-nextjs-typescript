import { FC } from 'react';
import { Metadata } from 'next';
import ModalForm from '@/components/ModalForm';
import SignUpForm from '@/components/SignUpForm';
import Container from '@/components/Container';
import { FormTypes } from '@/constants';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Page for sign up user',
};

const SignUpPage: FC = () => (
  <Container>
    <ModalForm formType={FormTypes.authForm}>
      <SignUpForm />
    </ModalForm>
  </Container>
);

export default SignUpPage;
