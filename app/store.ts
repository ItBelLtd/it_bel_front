import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import ItBelServices from '@/services/services';

type Store = {
  errors: {
    email: string;
    password: string;
    non_field_errors: string;
  };
  signin: any;
  signup: any;
};

export const useStore = create<Store>()(
  devtools((set) => ({
    errors: {
      email: '',
      password: '',
      non_field_errors: '',
    },
    signin: async (values: object) => {
      const { signin } = ItBelServices();
      try {
        const res = signin(values);
        res.then((data) => set({ errors: data }));
      } catch (error) {
        /*какие-то действия */
      }
    },
    signup: async (values: object) => {
      const { signup } = ItBelServices();
      try {
        const res = signup(values);
        res.then((data) => set({ errors: data }));
      } catch {
        /*какие-то действия */
      }
    },
  })),
);
