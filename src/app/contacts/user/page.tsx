import UserProfile from '@/components/UserProfile';
import { auth } from '../../../../auth';

const UserPage = async () => {
  const { user }: any = await auth();

  return <UserProfile user={user.user} />;
};

export default UserPage;
