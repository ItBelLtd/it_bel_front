import { useHttp } from '@/hook/usehttp';

const ItBelServices = () => {
  const { request } = useHttp();

  const signin = async (values: object) => {
    const res = await request({
      url: 'http://127.0.0.1/api/auth/token/login/',
      data: {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      },
    });
    return res;
  };
  const signup = async (values: object) => {
    const res = await request({
      url: 'http://127.0.0.1/api/users/',
      data: {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      },
    });
    return res;
  };
  const getAllAuthors = async () => {
    const res = await request({
      url: 'http://127.0.0.1/api/users/',
      data: {
        method: 'GET',
        body: null,
        headers: { 'Content-Type': 'application/json' },
      },
    });
    return res;
  };
  const getAllNews = async () => {
    const res = await request({
      url: 'http://127.0.0.1/api/news/',
      data: {
        method: 'GET',
        body: null,
        headers: { 'Content-Type': 'application/json' },
      },
    });
    return res;
  };
  const getNewsComments = async (news_id : number) => {
    const res = await request({
      url: `http://127.0.0.1/api/news/${news_id}/comments/`,
      data: {
        method: 'GET',
        body: null,
        headers: { 'Content-Type': 'application/json' },
      },
    });
    return res;
  };
  return {
    signup,
    signin,
    getAllAuthors,
    getAllNews,
    getNewsComments,
  };
};

export default ItBelServices;
// import { useHttp } from '../hooks/http.hook';

// const useMarvelService = () => {
//   const { request } = useHttp();

//   const getAllGoods = async (category) => {
//     const res = await request(
//       `http://amchocol.vh116.hosterby.com/products/items/`,
//       {
//         method: 'POST',
//         body: category,
//         headers: { 'Content-Type': 'application/json' },
//       },
//     );
//     return res;
//   };

//   const getNameOfGoods = async () => {
//     const res = await request(
//       `http://amchocol.vh116.hosterby.com/products/categories/`,
//     );
//     return res;
//   };
// };
