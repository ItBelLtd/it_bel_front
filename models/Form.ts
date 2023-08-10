export interface SigninValues {
  password: string;
  email: string;
}

export interface SignupAuthorValues {
  name: string;
  surName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}
export interface SignupValues {
  user: {
    userName: string;
    email: string;
    password: string;
  };
  author: {
    name?: string;
    surName?: string;
    dateOfBirth?: string;
  };
  toggle: boolean;
}
