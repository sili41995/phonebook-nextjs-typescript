import { PagesTypes } from '@/constants/pagesTypes';
import { StaticImageData } from 'next/image';

export type PagesPath = {
  homePath: '/';
  contactsPath: 'contacts';
  aboutPath: 'about';
  registerPath: 'register';
  loginPath: 'login';
  contactDetailsPath: 'contact-details';
  addNewContactPath: 'contacts/new-contact';
  contactPath: 'contact';
  newContactPath: 'new-contact';
  dynamicParam: 'id';
};

export type AuthPages = Pick<
  PagesPath,
  'homePath' | 'registerPath' | 'loginPath'
>;

export interface ICredentials {
  name?: string;
  password: string;
  email: string;
  keyValue?: string;
}

export interface IUser {
  name: string | null;
  email: string | null;
  lastName?: string;
  avatar?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  location?: string;
}

export interface IContact {
  id?: string;
  name: string;
  number: string;
  avatar?: string;
  role?: string;
  email?: string;
  chat?: string;
  description?: string;
  userAvatar?: string | StaticImageData;
}

export interface IContactsInitialState {
  items: IContact[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IAuthInitialState {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
  keyValue?: string;
  message?: string;
}

export interface IInitialState {
  contacts: IContactsInitialState;
  auth: IAuthInitialState;
}

export type Message = string;

export interface ICssProp {
  [key: string]: string;
}

export interface ILink {
  name: string;
  href: string;
  page: PagesTypes;
}

export type Token = string | null;

export type InputTypes = 'text' | 'tel' | 'email' | 'password';

export const enum BtnTypes {
  button = 'button',
  submit = 'submit',
}

export const enum Position {
  absolute = 'absolute',
  static = 'static',
}
