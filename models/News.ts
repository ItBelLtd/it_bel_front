export interface Author {
  author_id: number;
  name: string;
  surname: string;
  age: number;
  // email: string;
  date_joined: string;
}

export interface News {
  news_id: number;
  title: string;
  author: Author;
  description: string;
  content: string;
  total_likes: number;
  added: string;
}

export interface Comment {
  comment_id: number;
  text: string;
  author: number;
  total_likes: number;
  added: string;
}

export interface NewsStore {
  isLoading: boolean;
  allNews: [] | Array<News>;
  popularNews: [] | Array<News>;
  latestNews: [] | Array<News>;
  news: null | News;
  newsComments: null | Array<Comment>;
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
  changeNewsComment: (
    newsId: number,
    commentId: number,
    comment: object,
  ) => void;
  deleteNews: (newsId: number) => void;
  deleteNewsComment: (newsId: number, commentId: number) => void;
}
