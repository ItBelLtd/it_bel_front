import { create } from 'zustand';
import { NewsStore } from '@/models/News';
import ItBelServices from '@/services/ItBelServices';
import { devtools } from 'zustand/middleware';

export const useNews = create<NewsStore>()(
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
        set({ popularNews: res.results });
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
    fetchNews: async (id: number) => {
      const { getNews } = ItBelServices();

      try {
        const res = await getNews(`news/${id}/`);
        set({ news: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsComments: async (newsId: number) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(`news/${newsId}/comments`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsComment: async (newsId: number, commentId: string) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(`news/${newsId}/comments/${commentId}`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    addNews: async (news: object) => {
      const { addNew } = ItBelServices();

      try {
        const res = await addNew(news);
        console.log(res, 'Successful');
      } catch (e) {
        /*какие-то действия */
      }
    },
  })),
);
