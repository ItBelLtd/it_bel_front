import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserInfo } from '@/models/User';

import ItBelServices from '@/services/ItBelServices';

export const useUser = create<UserInfo>()(
  devtools((set) => ({
    getUserInfo: async (url) => {
      const { getUserInfo } = ItBelServices();
      try {
        const res = getUserInfo(url);
        res.then((data) => {});
      } catch {
        throw new Error('Что-то пошло не так');
      }
    },
    patchUserInfo: async (url, id) => {
      const { patchUserInfo } = ItBelServices();
      try {
        const res = patchUserInfo(url, id);
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
