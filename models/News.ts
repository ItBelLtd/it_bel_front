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
  total_likes: string;
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
  fetchNews: (id: number) => void;
  fetchNewsComments: (id: number) => void;
  addNews: (news: object) => void;
}
