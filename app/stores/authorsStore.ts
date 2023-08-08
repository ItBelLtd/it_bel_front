import { create } from 'zustand';
import { Authors } from '@/models/Authors';
import { devtools } from 'zustand/middleware';
import ItBelServices from '@/services/ItBelServices';

export const useAuthors = create<Authors>()(
  devtools((set) => ({
    authors: [],
    loading: false,
    getAllAuthors: async () => {
      const url = '';
      const { getAuthors } = ItBelServices();
      try {
        const res = getAuthors(url);
        set({ loading: true });
        res.then((data) => set({ authors: data.results, loading: false }));
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
    getAuthor: async (id: number) => {
      const url = `${id}/`;
      const { getAuthors } = ItBelServices();
      try {
        const res = getAuthors(url);
        set({ loading: true });
        res.then((data) => set({ authors: data.results, loading: false }));
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
    getAuthorNews: async (id: number) => {
      const url = `${id}/news/`;
      const { getAuthors } = ItBelServices();
      try {
        const res = getAuthors(url);
        set({ loading: true });
        res.then((data) => set({ authors: data.results, loading: false }));
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);