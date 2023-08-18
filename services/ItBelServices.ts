import { useHttp } from '@/hook/usehttp';
import { method } from '@/models/UseHttp';

const ItBelServices = () => {
  const _apiBase = 'http://127.0.0.1/api/';
  const { request } = useHttp();

  const auth = async (url: string, values?: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const getAuthors = async (url: string = '') => {
    return await request({
      url: `${_apiBase}authors/${url}`,
      data: {},
    });
  };

  const getAuthorNews = async (url: string = '') => {
    return await request({
      url: `${_apiBase}authors/${url}`,
      data: {},
    });
  };

  const getNews = async (url: string = 'news/') => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {},
    });
  };

  const getNewsComments = async (url: string) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {},
    });
  };

  const addNews = async (news: object) => {
    return await request({
      url: `${_apiBase}news/`,
      data: {
        method: 'POST',
        body: JSON.stringify(news),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const addNewsComment = async (url: string, comment: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  // const toggleLikeUnlike = async (url: string, data: object) => {
  //   return await request({
  //     url: `${_apiBase}${url}`,
  //     data: {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: { 'Content-Type': 'application/json' },
  //     },
  //   });
  // };

  const changeNewsOrComment = async (url: string, changes: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'PATCH',
        body: JSON.stringify(changes),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const deleteNewsOrComment = async (url: string) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'DELETE',
        body: null,
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  return {
    auth,
    getAuthors,
    getAuthorNews,
    getNews,
    getNewsComments,
    addNews,
    addNewsComment,
    // toggleLikeUnlike,
    changeNewsOrComment,
    deleteNewsOrComment,
  };
};

export default ItBelServices;
