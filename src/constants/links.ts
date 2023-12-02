import { PagesTypes } from './pagesTypes';

const links = [
  {
    name: 'Contacts',
    href: '/contacts',
    page: PagesTypes.contacts,
  },
  {
    name: 'Favorite contacts',
    href: '/contacts/favorite',
    page: PagesTypes.contacts,
  },
  {
    name: 'Add contact',
    href: '/contacts/add',
    page: PagesTypes.contacts,
  },
  {
    name: 'User',
    href: '/contacts/user',
    page: PagesTypes.contacts,
  },
  { name: 'About', href: '/about', page: PagesTypes.home },
  { name: 'Login', href: '/login', page: PagesTypes.home },
  { name: 'Register', href: '/register', page: PagesTypes.home },
];

export default links;
