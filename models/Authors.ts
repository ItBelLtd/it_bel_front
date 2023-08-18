// Для стора
export interface Authors {
  authors: [] | Array<Author>;
  author: Author;
  authorFollowers: [] | Array<Author>;
  fetchAllAuthors: () => void;
  fetchAuthor: (id: number) => void;
  fetchAuthorNews: (id: number) => void;
  fetchAuthorsFollowers: (id: number) => void;
}
// Для всех авторов
export interface Author {
  author_id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  date_joined: string;
  link?: string;
}
