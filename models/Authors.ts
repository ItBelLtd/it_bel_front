// Для стора
export interface Authors {
  authors: [];
  loading: boolean;
  getAllAuthors: () => void;
  getAuthor: (id: number) => void;
  getAuthorNews: (id: number) => void;
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
