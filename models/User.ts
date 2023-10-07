// export interface User {
//   user_id: number;
//   username?: string;
//   email: string;
//   date_joined: string;
//   password: string;
// }

export interface Info {
  user_id: number;
  username: string;
  email: string;
  as_author: {
    author_id: number;
    name: string;
    surname: string;
    age: number;
    date_joined: string;
  };
  news?: [];
}

export interface UserInfo {
  info: Info;
  aboutSomeone: Info;
  getUserProfile: () => void;
  getUserInfo: (id: number) => void;
  getUserFollowing: (id: number) => void;
  changeUserInfo: (id: number, value: object) => void;
  deleteUser: () => void;
}
