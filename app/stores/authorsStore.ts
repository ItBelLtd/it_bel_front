import { create } from 'zustand';
import { Authors } from '@/models/Authors';
import { devtools } from 'zustand/middleware';
import ItBelServices from '@/services/ItBelServices';
import { User } from '@/models/User';

export const useAuthors = create<Authors>()(
  devtools((set) => ({
    authors: [],
    author: { author_id: 0, name: '', surname: '', email: '', age: 0, date_joined: '' },
    authorFollowers: [],
    getAllAuthors: async () => {
      const url = '';
      const { getAuthors } = ItBelServices();
      try {
        const res = await getAuthors(url);
        set({ author: res });
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
    getAuthor: async (id: number) => {
      const url = `${id}/`;
      const { getAuthors } = ItBelServices();
      try {
        const res = await getAuthors(url);
        set({ author: res });
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
    getAuthorNews: async (id: number) => {
      const url = `${id}/news/`;
      const { getAuthors } = ItBelServices();
      try {
        const res = await getAuthors(url);
        set({ authors: res });
      } catch (error) {
        throw new Error('Что-то пошло не так');
      }
    },
    getAuthorsFollowers: async (id: number) => {
      const url = `${id}/followers`;
      const { getAuthors } = ItBelServices();
      try {
        const res = await getAuthors(url);
        set({ authorFollowers: res });
      } catch(err) {
        throw new Error('Что-то пошло не так');
      }
    },
    // TODO Разобраться с body для follow/unfollow, news-like/news-unlike
    // followAuthor: async (id: number, user: User) => {
    //   const url = `${id}/follow`;
    //   const { getAuthors } = ItBelServices();
    //   try {
    //     const body = JSON.stringify({
    //       'name': user.username,
    //       'surname': user.surname,
    //     });
    //     const res = getAuthors(url, 'POST', body);
    //   } catch(err) {
    //     throw new Error('Что-то пошло не так');
    //   }
    // },
    // unfollowAuthor: async (id: number, user: User) => {
    //   const url = `${id}/unfollow`;
    //   const { getAuthors } = ItBelServices();
    //   try {
    //     const body = JSON.stringify({
    //       'name': user.username,
    //       'surname': user.surname,
    //     });
    //     const res = getAuthors(url, 'POST', body);
    //   } catch(err) {
    //     throw new Error('Что-то пошло не так');
    //   }
    // },
    editAuthor: async (id: number, values: Object) => {
      const url = `${id}/`;
      const { getAuthors } = ItBelServices();
      try {
        const res = await getAuthors(url, 'PATCH', JSON.stringify(values));
        console.log(res, 'Successful');
      } catch(err) {
        throw new Error('Что-то пошло не так');
      }
    }
  })),
);
