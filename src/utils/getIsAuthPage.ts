import { PagePaths } from '@/constants';

const getIsAuthPage = (path: string): boolean =>
  [
    PagePaths.homePath,
    `/${PagePaths.signInPath}`,
    `/${PagePaths.signUpPath}`,
  ].includes(path);

export default getIsAuthPage;
