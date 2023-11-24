import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';
import SharedLayout from '@/components/SharedLayout';

export const metadata = {
  title: 'Login',
  description: 'Page for login user',
};

const LoginPage = () => (
  <SharedLayout>
    <AuthForm>
      <LoginForm />
    </AuthForm>
  </SharedLayout>
);

export default LoginPage;
