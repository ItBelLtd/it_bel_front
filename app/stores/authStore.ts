import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Auth } from '@/models/Auth';

import ItBelServices from '@/services/ItBelServices';

export const useAuth = create<Auth>()(
  devtools((set) => ({
    userId: 0,
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
          }
        });
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
            set({ errors: null, userId: data.user_id });
          }
        });
        return res;
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    logout: async (url) => {
      const { auth } = ItBelServices();
      try {
        const res = auth(url);
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);
