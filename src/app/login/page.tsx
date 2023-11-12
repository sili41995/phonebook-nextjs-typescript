import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Login',
  description: 'Page for login user',
};

const LoginPage = () => (
  <AuthForm>
    <LoginForm />
  </AuthForm>
);

export default LoginPage;
