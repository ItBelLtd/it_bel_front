export interface User {
  user_id: number;
  username?: string;
  email: string;
  date_joined: string;
  password: string;
}

export interface UserInfo {
  getUserInfo: (id: number) => void;
  getUserFollowing: (id: number) => void;
  changeUserInfo: (id: number, value: object) => void;
  deleteUser: (url: string, id: number) => void;
}
