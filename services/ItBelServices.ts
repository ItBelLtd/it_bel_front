import { useHttp } from '@/hook/usehttp';
import { getCookie } from '@/helpers/cookie';

const ItBelServices = () => {
  const _apiBase = 'http://127.0.0.1/api/';
  const { request } = useHttp();

  const auth = async (url: string, values?: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  };
  const logout = async (url: string) => {
    const token = getCookie('userToken');
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
      },
    });
  };
  const getUserInfo = async (url: string) => {
    const token = getCookie('userToken');
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
      },
    });
  };
  const changeUserInfo = async (url: string, value: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'PATCH',
        body: JSON.stringify(value),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };
  const deleteUser = async (url: string, id: number) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const getAuthors = async (url: string = 'authors/') => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {},
    });
  };

  const addAuthor = async (author: object) => {
    return await request({
      url: `${_apiBase}/authors/`,
      data: {
        method: 'POST',
        body: JSON.stringify(author),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const changeAuthor = async (url: string = 'authors/', changes: object) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'PATCH',
        body: JSON.stringify(changes),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  const deleteAuthor = async (url: string = 'authors/') => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'DELETE',
        body: null,
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  // const toggleFollowUnfollow = async (url: string, data: object) => {
  //   return await request({
  //     url: `${_apiBase}${url}`,
  //     data: {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: { 'Content-Type': 'application/json' },
  //     },
  //   });
  // };

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
    logout,
    getUserInfo,
    changeUserInfo,
    deleteUser,
    getAuthors,
    addAuthor,
    changeAuthor,
    deleteAuthor,
    // toggleFollowUnfollow,
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
