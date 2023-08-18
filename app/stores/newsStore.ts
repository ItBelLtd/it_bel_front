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
        const res = await getNews(`news/?page=${page}/`);
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
    fetchNewsComments: async (newsId: number) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(`news/${newsId}/comments/`);
        set({ newsComments: res.results });
      } catch (e) {
        /*какие-то действия */
      }
    },
    fetchNewsComment: async (newsId: number, commentId: number) => {
      const { getNewsComments } = ItBelServices();

      try {
        const res = await getNewsComments(`news/${newsId}/comments/${commentId}/`);
        // set({ newsComments: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    addNews: async (news: object) => {
      const { addNews } = ItBelServices();

      try {
        const res = await addNews(news);
        console.log(res, 'Successful');
      } catch (e) {
        /*какие-то действия */
      }
    },
    addNewsComment: async (newsId: number, comment: object) => {
      const { addNewsComment } = ItBelServices();

      try {
        const res = await addNewsComment(`news/${newsId}/comments/`, comment);
        console.log(res, 'Successful');
      } catch (e) {
        /*какие-то действия */
      }
    },
    // likeNews: async (newsId: number, data: object) => {
    //   const { toggleLikeUnlike } = ItBelServices();
    //
    //   try {
    //     const res = await toggleLikeUnlike(`news/${newsId}/like/`, data);
    //     console.log(res);
    //     // set({ newsComments: res.results });
    //   } catch (e) {
    //     /*какие-то действия */
    //   }
    // },
    // unlikeNews: async (newsId: number, data: object) => {
    //   const { toggleLikeUnlike } = ItBelServices();
    //
    //   try {
    //     const res = await toggleLikeUnlike(`news/${newsId}/unlike/`, data);
    //     console.log(res);
    //     // set({ newsComments: res.results });
    //   } catch (e) {
    //     /*какие-то действия */
    //   }
    // },
    // likeNewsComment: async (newsId: number, commentId: number, data: object) => {
    //   const { toggleLikeUnlike } = ItBelServices();
    //
    //   try {
    //     const res = await toggleLikeUnlike(`news/${newsId}/comments/${commentId}/like/`, data);
    //     console.log(res);
    //     // set({ newsComments: res.results });
    //   } catch (e) {
    //     /*какие-то действия */
    //   }
    // },
    // unlikeNewsComment: async (newsId: number, commentId: number, data: object) => {
    //   const { toggleLikeUnlike } = ItBelServices();
    //
    //   try {
    //     const res = await toggleLikeUnlike(`news/${newsId}/comments/${commentId}/unlike/`, data);
    //     console.log(res);
    //     // set({ newsComments: res.results });
    //   } catch (e) {
    //     /*какие-то действия */
    //   }
    // },
    changeNews: async (newsId: number, news: object) => {
      const { changeNewsOrComment } = ItBelServices();

      try {
        const res = await changeNewsOrComment(`news/${newsId}/`, news);
        set({ news: res });
      } catch (e) {
        /*какие-то действия */
      }
    },
    changeNewsComment: async (newsId: number, commentId: number, comment: object) => {
      const { changeNewsOrComment } = ItBelServices();

      try {
        const res = await changeNewsOrComment(`news/${newsId}/comments/${commentId}/`, comment);
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
);
