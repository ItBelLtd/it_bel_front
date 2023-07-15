import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import styles from './about-author-tab.module.css';
moment.locale('ru');
import { roboto_mono } from '@/app/fonts';

export interface AboutAuthorProps {
  name: string;
  registrationDate: string;
  lastVisitDate: string;
  bio: string;
}

const AboutAuthor = ({
  name,
  registrationDate,
  lastVisitDate,
  bio,
}: AboutAuthorProps) => {
  const calculateTimePeriod = (date: string): string => {
    const dateMoment = moment(date);
    const currentMoment = moment();
    const timeDiff = currentMoment.diff(dateMoment);
    const humanizedTimeDiff = moment.duration(timeDiff).humanize();
    return humanizedTimeDiff;
  };

  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${roboto_mono.className}`}>{name}</span>
      <p className={styles.timeIntervals}>
        <span className={styles.registrationInterval}>
          Регистрация: {calculateTimePeriod(registrationDate)} назад
        </span>
        <span className={styles.visitInterval}>
          Последнее посещение: {calculateTimePeriod(lastVisitDate)} назад
        </span>
      </p>
      <div className={styles.bio}>
        <span className={`${styles.header} ${roboto_mono.className}`}>About me</span>
        <p className={styles.paragraph}>{bio}</p>
        <p className={styles.paragraph}>{bio}</p>
      </div>
    </div>
  );
};

export default AboutAuthor;
