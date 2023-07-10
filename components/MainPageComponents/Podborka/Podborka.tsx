import React from 'react';
import someNews from "@/data/News";
import Image from 'next/image'
import styles from './Podborka.module.css'
import {News} from "@/models/News";

const Podborka = () => {
    return (
        <div className={styles.podborka}>
            { someNews.map((news : News) => {
                return (
                    <div className={styles.recNews}>
                        <div className={styles.text}>
                            <h3 className={styles.title}>{ news.title }</h3>
                            <h4 className={styles.date}>{ news.date }</h4>
                            <p className={styles.dscr}>{ news.dscr }</p>
                        </div>
                        <img src={news.img} className={styles.img} alt="Image"/>
                    </div>
                )
            })}

        </div>
    );
};

export default Podborka;