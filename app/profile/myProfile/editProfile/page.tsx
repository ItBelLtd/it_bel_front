'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './editProfile.module.css';
import { useUser } from '@/app/stores/userStore';
import { useRouter } from 'next/navigation';
const EditPage = () => {
  const { deleteProfile, getInfo, info, changeInfo } = useUser((state) => ({
    deleteProfile: state.deleteUser,
    getInfo: state.getUserProfile,
    info: state.info,
    changeInfo: state.changeUserInfo,
  }));
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    getInfo().then((res) => setValue(res.as_author.bio));
  }, []);

  const myRef = useRef(null);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <label htmlFor='about'>О себе</label>
      <input
        id='about'
        disabled={disabled}
        ref={myRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Расскажите о себе'
      />
      <button
        className={styles.editButton}
        type='button'
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          const change = {
            bio: value,
          };
          changeInfo(info.as_author.author_id, change);
          setTimeout(() => {
            (myRef.current as HTMLInputElement | null)?.blur();
          }, 0);
          // router.refresh();
          // router.push('/profile/myProfile/about');
        }}
      >
        Сохранить
      </button>
      <button
        className={styles.editButton}
        type='button'
        onClick={() => {
          setDisabled(false);
          setTimeout(() => {
            (myRef.current as HTMLInputElement | null)?.focus();
          }, 0);
        }}
      >
        Редактировать
      </button>
      <button
        className={styles.button}
        type='button'
        onClick={() => {
          deleteProfile();
          router.refresh();
          router.push('/');
        }}
      >
        Удалить аккаунт
      </button>
    </div>
  );
};
export default EditPage;
