// export interface Author {
//   user_id: number;
//   username: string;
//   date_joined: string;
//   as_author: {
//     author_id: number;
//     name: string;
//     surname: string;
//     age: number;
//     date_joined: string;
//     bio: string;
//   };
// }
export interface Author {
  user_id: number;
  username: string;
  author_id: number;
  name: string;
  surname: string;
  age: number;
  date_joined: string;
  bio: string;
}
// export interface AuthorComment {
//   as_author: Author;
//   user_id: number;
//   username: string;
//   date_joined: string;
// }

export interface Tags {
  id: number;
  name: string;
  slug: string;
}

export interface News {
  news_id: number;
  title: string;
  author: Author;
  cover: string;
  content: string;
  tags: Array<Tags>;
  added: string;
  total_likes: number;
  total_dislikes: number;
  sum_rating: number;
  vote: number;
}

export interface Comment {
  comment_id: number;
  text: string;
  author: Author;
  total_likes: number;
  added: string;
  vote: number;
}

export interface NewsStore {
  allNews: [] | Array<News>;
  popularNews: [] | Array<News>;
  latestNews: [] | Array<News>;
  news: null | News;
  newsComments: null | Array<Comment>;
  fetchAllNews: () => void;
  fetchPopularNews: () => void;
  fetchLatestNews: (page: number) => void;
  fetchNews: (newsId: number) => void;
  fetchNewsWithAuth: (newsId: number, token: string) => void;
  fetchNewsComments: (newsId: number) => void;
  fetchNewsCommentsWithAuth: (newsId: number, token: string) => void;
  fetchNewsComment: (newsId: number, commentId: number) => void;
  addNews: (news: object) => void;
  addNewsComment: (newsId: number, comment: object) => void;
  likeNews: (newsId: number) => void;
  dislikeNews: (newsId: number) => void;
  likeNewsComment: (newsId: number, commentId: number) => void;
  changeNews: (newsId: number, news: object) => void;
  changeNewsComment: (
    newsId: number,
    commentId: number,
    comment: object,
  ) => void;
  deleteNews: (newsId: number) => void;
  deleteNewsComment: (newsId: number, commentId: number) => void;
}
