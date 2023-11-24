import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';
import SharedLayout from '@/components/SharedLayout';

const Home = () => {
  return (
    <SharedLayout>
      <AuthForm>
        <LoginForm />
      </AuthForm>
    </SharedLayout>
  );
};

export default Home;
