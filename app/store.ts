import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import ItBelServices from '@/services/ItBelServices';
import { Auth } from '@/models/Auth';
import { Authors } from '@/models/Authors';
import { url } from 'inspector';

export const useSigninSignup = create<Auth>()(
  devtools((set) => ({
    errors: {
      email: '',
      password: '',
      non_field_errors: '',
    },
    signin: async (values, url) => {
      const { signin } = ItBelServices();
      try {
        const res = signin(values, url);
        res.then((data) => set({ errors: data }));
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    signup: async (values, url) => {
      const { signup } = ItBelServices();
      try {
        const res = signup(values, url);
        res.then((data) => {
          set({ errors: data });
        });
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);

export const useAuthors = create<Authors>()(
  devtools((set) => ({
    authors: [],
    loading: false,
    getAllAuthors: async (url) => {
      const { getAllAuthors } = ItBelServices();
      try {
        const res = getAllAuthors(url);
        set({ loading: true });
        res.then((data) => set({ authors: data.results, loading: false }));
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);

export const useNews = create<Authors>()(devtools((set) => ({})));
export const useUsers = create<Authors>()(devtools((set) => ({})));
