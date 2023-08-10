import { useHttp } from '@/hook/usehttp';

const ItBelServices = () => {
  const _apiBase = 'http://127.0.0.1/api/';
  const { request } = useHttp();

  const auth = async (values: object, url: string) => {
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
    getAuthors,
    getNews,
    getNewsComments,
    addNew,
  };
};

export default ItBelServices;
