import { PagesTypes } from './pagesTypes';

const links = [
  {
    name: 'Contacts',
    href: '/contacts',
    icon: null,
    page: PagesTypes.contacts,
  },
  {
    name: 'Favorite contacts',
    href: '/contacts/favorite',
    icon: null,
    page: PagesTypes.contacts,
  },
  {
    name: 'Add contact',
    href: '/contacts/add',
    icon: null,
    page: PagesTypes.contacts,
  },
  {
    name: 'User',
    href: '/contacts/user',
    icon: null,
    page: PagesTypes.contacts,
  },
  { name: 'About', href: '/about', icon: null, page: PagesTypes.home },
  { name: 'Login', href: '/login', icon: null, page: PagesTypes.home },
  { name: 'Register', href: '/register', icon: null, page: PagesTypes.home },
];

export default links;
