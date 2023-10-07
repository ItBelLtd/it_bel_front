'use client';
import React from 'react';
import styles from './editProfile.module.css';
import { useUser } from '@/app/stores/userStore';
const EditPage = () => {
  const { deleteProfile } = useUser((state) => ({
    deleteProfile: state.deleteUser,
  }));
  return (
    <div>
      <label htmlFor='about'>О себе</label>
      <input id='about' />
      <button
        className={styles.button}
        type='button'
        onClick={() => deleteProfile()}
      >
        Удалить аккаунт
      </button>
    </div>
  );
};
export default EditPage;
