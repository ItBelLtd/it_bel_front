import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserInfo } from '@/models/User';

import ItBelServices from '@/services/ItBelServices';

export const useUser = create<UserInfo>()(
  devtools((set) => ({
    getUserInfo: async (id) => {
      const { getUserInfo } = ItBelServices();
      const url = `users/${id}`;
      try {
        const res = getUserInfo(url);
        res.then((data) => {});
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
      const url = `users/${id}`;
      try {
        const res = changeUserInfo(url, value);
        res.then((data) => {});
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    deleteUser: async (url, id) => {
      const { deleteUser } = ItBelServices();
      try {
        const res = deleteUser(url, id);
        res.then((data) => {});
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
  })),
);
