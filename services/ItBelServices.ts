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
  return {
    signup,
    signin,
    getAuthors,
  };
};

export default ItBelServices;
