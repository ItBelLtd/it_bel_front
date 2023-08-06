import { useHttp } from '@/hook/usehttp';

export const useMarvelService = () => {
  const { request } = useHttp();

  // const getAllGoods = async (category) => {
  //   const res = await request(
  //     'http://amchocol.vh116.hosterby.com/products/items/',
  //     {
  //       method: 'POST',
  //       body: category,
  //       headers: { 'Content-Type': 'application/json' },
  //     },
  //   );
  //   return res;
  // };

  const getAllNews = async () => {
    const res = await request('http://127.0.0.1/api/news/?page=0', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res);
    return res;
  };

  // const getNameOfGoods = async () => {
  //   const res = await request(
  //     `http://amchocol.vh116.hosterby.com/products/categories/`,
  //   );
  //   return res;
  // };
};
