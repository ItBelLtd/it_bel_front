import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import styles from './about-author-tab.module.css';
moment.locale('ru');
import { roboto_mono } from '@/app/fonts';
import { Info } from '@/models/User';

const About = ({ info }: { info: Info }) => {
  const calculateTimePeriod = (date: string): string => {
    const dateMoment = moment(date);
    const currentMoment = moment();
    const timeDiff = currentMoment.diff(dateMoment);
    const humanizedTimeDiff = moment.duration(timeDiff).humanize();
    return humanizedTimeDiff;
  };

  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${roboto_mono.className}`}>
        {info.username}
      </span>
      <p className={styles.timeIntervals}>
        <span className={styles.registrationInterval}>
          Регистрация: {calculateTimePeriod(info.as_author.date_joined)} назад
        </span>
      </p>
      <div className={styles.bio}>
        <span className={`${styles.header} ${roboto_mono.className}`}>
          About me
        </span>
      </div>
    </div>
  );
};

export default About;
