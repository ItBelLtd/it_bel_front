import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Auth } from '@/models/Auth';
import { deleteCookie, setCookie } from '@/services/cookie';

import ItBelServices from '@/services/ItBelServices';

export const useAuth = create<Auth>()(
  devtools((set) => ({
    token: '',
    errors: {
      email: '',
      password: '',
      non_field_errors: '',
    },

    signin: async (url, values) => {
      const { auth } = ItBelServices();
      try {
        const res = auth(url, values);
        res.then((data) => {
          if (data.errors) {
            set({ errors: data.errors });
          } else {
            set({ token: data.auth_token, errors: null });
            setCookie('userToken', `${data.auth_token}`);
          }
        });
        return res;
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    signup: async (url, values) => {
      const { auth } = ItBelServices();
      try {
        const res = auth(url, values);
        res.then((data) => {
          if (data.errors) {
            set({ errors: data.errors });
          } else {
            set({ errors: null });
          }
        });
        return res;
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    logout: async (url) => {
      const { logout } = ItBelServices();
      try {
        const res = logout(url);
        res.then(() => {
          deleteCookie('userToken');
          set({ token: '' });
        });
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);
