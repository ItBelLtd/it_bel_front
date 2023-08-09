import { useHttp } from '@/hook/usehttp';

const ItBelServices = () => {
  const _apiBase = 'http://127.0.0.1/api/';
  const { request } = useHttp();

  const signin = async (values: object, url: string) => {
    return await request({
      url: `${_apiBase}${url}`,
      data: {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };
  const signup = async (values: object, url: string) => {
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

  const getNews = async (url: string = `${_apiBase}news/`) => {
    return await request({
      url: url,
      data: {},
    });
  };

  const getNewsComments = async (id: number) => {
    return await request({
      url: `http://127.0.0.1/api/news/${id}/comments`,
      data: {},
    });
  };

  const addNew = async (news: object) => {
    return await request({
      url: 'http://127.0.0.1/api/news/',
      data: {
        method: 'POST',
        body: JSON.stringify(news),
        headers: { 'Content-Type': 'application/json' },
      },
    });
  };

  return {
    signup,
    signin,
    getAuthors,
    getNews,
    getNewsComments,
    addNew,
  };
};

export default ItBelServices;
