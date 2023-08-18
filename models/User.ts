export interface User {
  user_id: number;
  username?: string;
  email: string;
  date_joined: string;
  password: string;
}
export interface UserInfo {
  getUserInfo: (url: string) => void;
  patchUserInfo: (url: string, id: number) => void;
  deleteUser: (url: string, id: number) => void;
}
