'use client';
import styles from './input.module.css';

export const Input = ({
  text = 'Поиск',
  width = '350px',
  margin = '',
}: {
  text: string ;
  width: string;
  margin?: string ;
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder={text}
        style={{ width: width, margin:margin }}
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
