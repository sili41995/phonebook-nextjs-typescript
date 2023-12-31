import {
  IAvatar,
  IContact,
  ICredentials,
  ICurrentUser,
  IFetchContactsRes,
  ISignInRes,
  ISignUpRes,
  IUpdContactStatusProps,
  IUpdateContactProps,
} from '@/types/types';

class ContactsServiceApi {
  private BASE_URL: string = 'https://contacts-rest-api-dvg7.onrender.com/api';
  private TOKEN: string | null = null;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  signUpUser(data: FormData): Promise<ISignUpRes> {
    const options = {
      method: 'POST',
      body: data,
    };

    return fetch(`${this.BASE_URL}/auth/signup`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  signInUser(data: ICredentials): Promise<ISignInRes> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/auth/signin`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  signOutUser(): Promise<void> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/auth/signout`, options)
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data?.message) {
          throw Error(data.message);
        }
      });
  }

  refreshUser(): Promise<ICurrentUser | null> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/auth/current`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          return null;
        }
        return data;
      });
  }

  updateUserAvatar(data: FormData): Promise<IAvatar> {
    const options = {
      method: 'PATCH',
      body: data,
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/auth/avatars`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchContacts(): Promise<IFetchContactsRes> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts?limit=0`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchContactById(id: string): Promise<IContact> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  addContact(data: FormData): Promise<IContact> {
    const options = {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  deleteContact(id: string): Promise<IContact> {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  updateContact({ id, data }: IUpdateContactProps): Promise<IContact> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  updateContactAvatar(id: string, data: FormData): Promise<IAvatar> {
    const options = {
      method: 'PATCH',
      body: data,
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}/avatar`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  updateContactStatus({ id, data }: IUpdContactStatusProps): Promise<IContact> {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}/favorite`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }
}

const contactsServiceApi = new ContactsServiceApi();

export default contactsServiceApi;
