export interface SigninValues {
  password: string;
  email: string;
}

export interface UserSignupValues {
  userName: string;
  email: string;
  password: string;
}

export interface AuthorSignupValues extends UserSignupValues {
  author: {
    name: string;
    surname: string;
    age: number | string;
  };
}
