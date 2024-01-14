import { FC } from 'react';
import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import Container from '@/components/Container';
import { FormTypes } from '@/constants';

const HomePage: FC = () => (
  <Container>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </Container>
);

export default HomePage;
