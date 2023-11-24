import AuthForm from '@/components/AuthForm';
import RegisterForm from '@/components/RegisterForm';
import SharedLayout from '@/components/SharedLayout';

export const metadata = {
  title: 'Register',
  description: 'Page for register new user',
};

const RegisterPage = () => (
  <SharedLayout>
    <AuthForm>
      <RegisterForm />
    </AuthForm>
  </SharedLayout>
);

export default RegisterPage;
