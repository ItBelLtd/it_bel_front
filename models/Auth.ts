export interface Auth {
  errors: {
    email: string;
    password: string;
    non_field_errors: string;
  };
  signin: (smth: object, url: string) => void;
  signup: (smth: object, url: string) => void;
}
