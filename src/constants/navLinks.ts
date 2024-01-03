import { NavLinkTypes, PagePaths } from '.';

const navLinks = [
  {
    name: 'Contacts',
    href: `/${PagePaths.contactsPath}`,
    type: NavLinkTypes.general,
  },
  {
    name: 'About',
    href: `/${PagePaths.aboutPath}`,
    type: NavLinkTypes.general,
  },

  {
    name: 'Sign Up',
    href: `/${PagePaths.signUpPath}`,
    type: NavLinkTypes.auth,
  },
  {
    name: 'Sign In',
    href: `/${PagePaths.signInPath}`,
    type: NavLinkTypes.auth,
  },
];

export default navLinks;
