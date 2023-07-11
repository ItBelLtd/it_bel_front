'use client'
import { FC } from 'react';
import styles from './input.module.css';
import Image from 'next/image';

export const Input: FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='Type something...'
      />
      {/*<Image*/}
      {/*  src='/saerch_icon.svg'*/}
      {/*  width={25}*/}
      {/*  height={25}*/}
      {/*  className={styles.icon}*/}
      {/*  alt='search'*/}
      {/*/>*/}
    </div>
  );
};

export default Input;