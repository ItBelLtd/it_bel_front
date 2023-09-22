import { createWithEqualityFn } from 'zustand/traditional';
import { NewsStore } from '@/models/News';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

import ItBelServices from '@/services/ItBelServices';

export const useNews = createWithEqualityFn<NewsStore>()(
  devtools((set) => ({
    allNews: [],
    popularNews: [],
    latestNews: [],
    news: null,
    newsComments: null,
    fetchAllNews: async () => {
      const { getNews } = ItBelServices();

      try {
        const res = await getNews();
        set({ allNews: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchPopularNews: async () => {
      const { getNews } = ItBelServices();

      try {
        const res = await getNews('news/popular/');
        set({ popularNews: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchLatestNews: async (page: number) => {
      const { getNews } = ItBelServices();

      try {
        const res = await getNews(`news/?page=${page}`);
        set({ latestNews: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNews: async (newsId: number) => {
      const { getNews } = ItBelServices();

      try {
        const res = await getNews(`news/${newsId}/`);
        set({ news: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsWithAuth: async (newsId: number, token: string) => {
      const { getNewsWithAuth } = ItBelServices();

      try {
        const res = await getNewsWithAuth(`news/${newsId}/`, token);
        set({ news: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsComments: async (newsId: number) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(`news/${newsId}/comments/`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsCommentsWithAuth: async (newsId: number, token: string) => {
      const { getNewsCommentsWithAuth } = ItBelServices();

      try {
        const res = await getNewsCommentsWithAuth(
          `news/${newsId}/comments/`,
          token,
        );
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsComment: async (newsId: number, commentId: number) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(
          `news/${newsId}/comments/${commentId}/`,
        );
        // set({ newsComments: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    addNews: async (news: object) => {
      const { addNews } = ItBelServices();

      try {
        await addNews(news);
      } catch (e) {
        /*какие-то действия */
      }
    },
    addNewsComment: async (newsId: number, comment: object) => {
      const { addNewsComment, getNewsComments } = ItBelServices();

      try {
        await addNewsComment(`news/${newsId}/comments/`, comment);
        const res = await getNewsComments(`news/${newsId}/comments/`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    likeNews: async (newsId: number) => {
      const { toggleLikeDislike } = ItBelServices();
      try {
        await toggleLikeDislike(`news/${newsId}/like/`);
      } catch (e) {
        /*какие-то действия */
      }
    },
    dislikeNews: async (newsId: number) => {
      const { toggleLikeDislike } = ItBelServices();

      try {
        await toggleLikeDislike(`news/${newsId}/dislike/`);
      } catch (e) {
        /*какие-то действия */
      }
    },
    likeNewsComment: async (newsId: number, commentId: number) => {
      const { toggleLikeDislike } = ItBelServices();

      try {
        await toggleLikeDislike(`news/${newsId}/comments/${commentId}/like/`);
      } catch (e) {
        /*какие-то действия */
      }
    },
    changeNews: async (newsId: number, news: object) => {
      const { changeNewsOrComment } = ItBelServices();

      try {
        const res = await changeNewsOrComment(`news/${newsId}/`, news);
        set({ news: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    changeNewsComment: async (
      newsId: number,
      commentId: number,
      comment: object,
    ) => {
      const { changeNewsOrComment } = ItBelServices();

      try {
        const res = await changeNewsOrComment(
          `news/${newsId}/comments/${commentId}/`,
          comment,
        );
        set({ newsComments: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    deleteNews: async (newsId: number) => {
      const { deleteNewsOrComment, getNews } = ItBelServices();

      try {
        await deleteNewsOrComment(`news/${newsId}/`);
        const res = await getNews();
        set({ allNews: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    deleteNewsComment: async (newsId: number, commentId: number) => {
      const { deleteNewsOrComment, getNewsComments } = ItBelServices();

      try {
        await deleteNewsOrComment(`news/${newsId}/comments/${commentId}`);
        const res = await getNewsComments(`news/${newsId}/comments/`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
  })),
  shallow,
);
