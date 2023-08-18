interface Errors {
  email: string;
  password: string;
  non_field_errors: string;
}
interface PromiseError {
  errors: Errors;
}
export interface Auth {
  userId: number;
  token: string;
  errors: Errors | null;
  signin: (url: string, values?: object) => Promise<PromiseError>;
  signup: (url: string, values?: object) => Promise<PromiseError>;
  logout: (url: string) => void;
}
