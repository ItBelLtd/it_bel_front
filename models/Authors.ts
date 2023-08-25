// Для всех авторов
import { News } from '@/models/News';
import authorCard from '@/components/AuthorCard';

export interface Author {
  author_id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  date_joined: string;
  link?: string;
}

// Для стора
export interface Authors {
  allAuthors: [] | Array<Author>;
  author: null | Author;
  authorNews: [] | Array<News>;
  authorFollowers: [] | Array<Author>;
  // authorStats: any; // THIS IS FOR MODERATORS

  fetchAllAuthors: (page: number, search?: string) => void;
  fetchAuthor: (authorId: number) => void;
  fetchAuthorNews: (authorId: number) => void;
  fetchAuthorsFollowers: (authorId: number) => void;
  changeAuthor: (authorId: number, author: Object) => void;
  deleteAuthor: (authorId: number) => void;
  addAuthor: (author: object) => void;
  followAuthor: (authorId: number) => void;
  unfollowAuthor: (authorId: number) => void;
  // fetchAuthorStats: (authorId: number) => void; // THIS IS FOR MODERATORS
}
