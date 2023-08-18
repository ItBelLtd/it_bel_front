import { Comment } from '@/models/Comment';

export interface News {
  id: number;
  title: string;
  date: string;
  dscr: string;
  img: string;
  authorName: string;
  comments: Comment[];
}

type author = {
  author_id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  date_joined: string;
};

type news = {
  news_id: number;
  title: string;
  author: author;
  description: string;
  content: string;
  total_likes: number;
  added: string;
};

type comment = {
  comment_id: number;
  text: string;
  author: number;
  total_likes: number;
  added: string;
}

export interface NewsStore {
  allNews: [] | Array<news>;
  popularNews: [] | Array<news>;
  latestNews: [] | Array<news>;
  news: null | news;
  newsComments: null | Array<comment>;
  fetchAllNews: () => void;
  fetchPopularNews: () => void;
  fetchLatestNews: (page: number) => void;
  fetchNews: (newsId: number) => void;
  fetchNewsComments: (newsId: number) => void;
  fetchNewsComment: (newsId: number, commentId: number) => void;
  addNews: (news: object) => void;
  addNewsComment: (newsId: number, comment: object) => void;
  // likeNews: (newsId: number, data: object) => void;
  // unlikeNews: (newsId: number, data: object) => void;
  // likeNewsComment: (newsId: number, commentId: number, data: object) => void;
  // unlikeNewsComment: (newsId: number, commentId: number, data: object) => void;
  changeNews: (newsId: number, news: object) => void;
  changeNewsComment: (newsId: number, commentId: number, comment: object) => void;
  deleteNews: (newsId: number) => void;
  deleteNewsComment: (newsId: number, commentId: number) => void;
}
