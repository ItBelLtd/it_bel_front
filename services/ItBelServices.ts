import { useHttp } from '@/hook/usehttp';

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
  const getUserInfo = async (url: string) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {},
    });
  };
  const patchUserInfo = async (url: string, id: number) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'PATCH',
        body: JSON.stringify(id),
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
  const getAuthors = async (url: string = '') => {
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

  const addNew = async (news: object) => {
    return await request({
      url: `${_apiBase}news/`,
      data: {
        method: 'POST',
        body: JSON.stringify(news),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  return {
    auth,
    getUserInfo,
    patchUserInfo,
    deleteUser,
    getAuthors,
    getNews,
    getNewsComments,
    addNew,
  };
};

export default ItBelServices;
