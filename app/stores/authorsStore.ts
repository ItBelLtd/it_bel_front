import { create } from 'zustand';
import { Authors } from '@/models/Authors';
import ItBelServices from '@/services/ItBelServices';
import { devtools } from 'zustand/middleware';

export const useAuthors = create<Authors>()(
  devtools((set) => ({
    allAuthors: [],
    author: null,
    authorNews: [],
    authorFollowers: [],
    // authorStats: null,
    fetchAllAuthors: async (page: number, search: string) => {
      const { getAuthors } = ItBelServices();

      try {
        const res = await getAuthors(`authors/?page=${page}&search=${search}/`);
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
      } catch (e) {
        throw new Error('Что-то пошло не так');
      }
    },
    fetchAuthorsFollowers: async (authorId: number) => {
      const { getAuthors } = ItBelServices();

      try {
        const res = await getAuthors(`authors/${authorId}/followers/`);
        set({ authorFollowers: res });
      } catch(e) {
        throw new Error('Что-то пошло не так');
      }
    },
    changeAuthor: async (authorId: number, author: Object) => {
      const { changeAuthor } = ItBelServices();

      try {
        const res = await changeAuthor(`authors/${authorId}/`, author);
        set({ author: res });
      } catch(e) {
        throw new Error('Что-то пошло не так');
      }
    },
    deleteAuthor: async (authorId: number) => {
      const { deleteAuthor, getAuthors } = ItBelServices();

      try {
        await deleteAuthor(`authors/${authorId}/`);
        const res = await getAuthors('authors/');
        set({ allAuthors: res.results });
      } catch(e) {
        throw new Error('Что-то пошло не так');
      }
    },
    addAuthor: async (author: object) => {
      const { addAuthor, getAuthors } = ItBelServices();

      try {
        await addAuthor(author);
        const res = await getAuthors('authors/');
        set({ allAuthors: res.results });
      } catch(e) {
        throw new Error('Что-то пошло не так');
      }
    },
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
  //   followAuthor: async (authorId: number, data: object) => {
  //     const { toggleFollowUnfollow } = ItBelServices();
  //
  //     try {
  //       const res = await toggleFollowUnfollow('authors/${authorId}/follow');
  //       console.log(res);
  //     } catch(err) {
  //       throw new Error('Что-то пошло не так');
  //     }
  //   },
  //   unfollowAuthor: async (authorId: number, data: object) => {
  //     const { toggleFollowUnfollow } = ItBelServices();
  //
  //     try {
  //       const res = await toggleFollowUnfollow('authors/${authorId}/unfollow');
  //       console.log(res);
  //     } catch(err) {
  //       throw new Error('Что-то пошло не так');
  //     }
  //   },
  })),
);
