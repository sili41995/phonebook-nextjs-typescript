import AuthForm from '@/components/AuthForm';
import RegisterForm from '@/components/RegisterForm';

export const metadata = {
  title: 'Register',
  description: 'Page for register new user',
};

const RegisterPage = () => (
  <AuthForm>
    <RegisterForm />
  </AuthForm>
);

export default RegisterPage;
