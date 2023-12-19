import { PagePaths } from '@/constants';

const getIsContactsPage = (path: string): boolean =>
  path.includes(PagePaths.contactsPath);

export default getIsContactsPage;
