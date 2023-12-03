import UserProfile from '@/components/UserProfile';
import { auth } from '../../../../auth';

export const metadata = {
  title: 'My profile',
  description: 'Info about user',
};

const UserPage = async () => {
  const { user }: any = await auth();

  return <UserProfile user={user.user} />;
};

export default UserPage;
