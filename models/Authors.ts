// Для стора
export interface Authors {
  authors: [];
  loading: boolean;
  getAllAuthors: (url: string) => void;
}
// Для всех авторов
export interface Author {
  id: number;
  name: string;
  link: string;
}
