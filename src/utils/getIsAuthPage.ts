import { PagePaths } from '@/constants';

const { signInPath, signUpPath, homePath } = PagePaths;

const getIsAuthPage = (path: string): boolean =>
  [homePath, `/${signInPath}`, `/${signUpPath}`].includes(path);

export default getIsAuthPage;
