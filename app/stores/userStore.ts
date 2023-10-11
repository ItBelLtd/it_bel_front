import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserInfo } from '@/models/User';

import ItBelServices from '@/services/ItBelServices';
import { deleteCookie } from '@/services/cookie';

export const useUser = create<UserInfo>()(
  devtools((set) => ({
    info: {
      user_id: 0,
      username: '',
      as_author: {
        author_id: 0,
        name: '',
        surname: '',
        age: 0,
        date_joined: '',
        bio: '',
      },
    },
    aboutSomeone: {
      user_id: 0,
      username: '',
      as_author: {
        author_id: 0,
        name: '',
        surname: '',
        age: 0,
        date_joined: '',
        bio: '',
      },
    },
    getUserProfile: async () => {
      const { getUserProfile } = ItBelServices();
      const url = 'users/profile/';
      try {
        const res = getUserProfile(url);
        res.then((data) => {
          set({ info: data });
        });
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    getUserInfo: async (id) => {
      const { getUserInfo } = ItBelServices();
      const url = `users/${id}/`;
      try {
        const res = getUserInfo(url);
        res.then((data) => {
          set({ aboutSomeone: data });
        });
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    getUserFollowing: async (id) => {
      const { getUserInfo } = ItBelServices();
      const url = `users/${id}`;
      try {
        const res = getUserInfo(url);
        res.then((data) => {});
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    changeUserInfo: async (id, value) => {
      const { changeUserInfo } = ItBelServices();
      const url = `authors/${id}/`;
      try {
        const res = changeUserInfo(url, value);
        res.then((data) => {});
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    deleteUser: async () => {
      const { deleteUser } = ItBelServices();
      try {
        const res = deleteUser().then(() => deleteCookie('userToken'));
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);
