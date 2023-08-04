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
