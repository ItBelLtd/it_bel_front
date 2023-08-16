import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import ItBelServices from '@/services/ItBelServices';
import { Auth } from '@/models/Auth';
export const useAuth = create<Auth>()(
  devtools((set) => ({
    errors: {
      email: '',
      password: '',
      non_field_errors: '',
    },
    signin: async (values, url) => {
      const { auth } = ItBelServices();
      try {
        const res = auth(values, url);
        res.then((data) => set({ errors: data }));
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    signup: async (values, url) => {
      const { auth } = ItBelServices();
      try {
        const res = auth(values, url);
        res.then((data) => {
          set({ errors: data });
        });
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);
