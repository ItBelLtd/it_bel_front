import { createWithEqualityFn } from 'zustand/traditional';
import { Authors } from '@/models/Authors';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

import ItBelServices from '@/services/ItBelServices';

export const useAuthors = createWithEqualityFn<Authors>()(
  devtools((set) => ({
    allAuthors: [],
    author: null,
    authorNews: [],
    authorFollowers: [],
    // authorStats: null,
    fetchAllAuthors: async (page: number, search: string = '') => {
      const { getAuthors } = ItBelServices();
      const searchText = search == '' ? '' : `&search=${search}/`;
      try {
        const res = await getAuthors(`authors/?page=${page}${searchText}`);
        set({ allAuthors: res.results });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    fetchAuthor: async (authorId: number) => {
      const { getAuthors } = ItBelServices();

      try {
        const res = await getAuthors(`authors/${authorId}/`);
        set({ author: res });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    fetchAuthorNews: async (authorId: number) => {
      const { getAuthors } = ItBelServices();

      try {
        const res = await getAuthors(`authors/${authorId}/news/`);
        set({ authorNews: res });
        return res;
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    fetchAuthorsFollowers: async (authorId: number) => {
      const { getAuthors } = ItBelServices();

      try {
        const res = await getAuthors(`authors/${authorId}/followers/`);
        set({ authorFollowers: res });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    changeAuthor: async (authorId: number, author: Object) => {
      const { changeAuthor } = ItBelServices();

      try {
        const res = await changeAuthor(`authors/${authorId}/`, author);
        set({ author: res });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    deleteAuthor: async (authorId: number) => {
      const { deleteAuthor, getAuthors } = ItBelServices();

      try {
        await deleteAuthor(`authors/${authorId}/`);
        const res = await getAuthors('authors/');
        set({ allAuthors: res.results });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    addAuthor: async (author: object) => {
      const { addAuthor, getAuthors } = ItBelServices();

      try {
        await addAuthor(author);
        const res = await getAuthors('authors/');
        set({ allAuthors: res.results });
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    followAuthor: async (authorId: number) => {
      const { toggleFollowUnfollow } = ItBelServices();

      try {
        const res = await toggleFollowUnfollow(`authors/${authorId}/follow`);
      } catch (err) {
        throw new Error('Что-то пошло не так');
      }
    },
    unfollowAuthor: async (authorId: number) => {
      const { toggleFollowUnfollow } = ItBelServices();

      try {
        const res = await toggleFollowUnfollow(`authors/${authorId}/unfollow`);
      } catch (err) {
        throw new Error('Что-то пошло не так');
      }
    },
    // // THIS IS FOR MODERATORS
    //   fetchAuthorStats: async (authorId: number) => {
    //     const { getAuthors } = ItBelServices();
    //
    //     try {
    //       const res = await getAuthors(`authors/author_stats/${authorId}`);
    //       set({ authorStats: res });
    //     } catch(err) {
    //       throw new Error('Что-то пошло не так');
    //     }
    //   },
  })),
  shallow,
);
