'use client'
import {useEffect, useState} from "react";
import someNews from "@/data/News";
import { News } from "@/models/News";
import styles from './news.module.css'
import {roboto_mono} from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
    const [newsData, setData] = useState<News>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setData(someNews.find((news) => news.id === parseInt(params.id)));
        setIsLoading(true)
    }, [])
    return (
        <div>
            { isLoading ?
                <div className="news">
                    <div className={styles.topPart} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${newsData?.img})` }}>
                        <div className={styles.container}>
                            <h1 className={`${styles.title} + ${roboto_mono.className}`}>{newsData?.title}</h1>
                            <Link href={`/${newsData?.authorName}`}>
                                <div className={styles.author}>
                                    <Image
                                        className={styles.authorImg}
                                        src={'/userAvatar.jpg'}
                                        width={30}
                                        height={30}
                                        alt={'img'}
                                    />
                                    <p className={styles.authorName}>{newsData?.authorName}</p>
                                </div>
                            </Link>
                            <hr className={styles.hr}/>
                            <p className={styles.date}>{newsData?.date}</p>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <p>{newsData?.dscr}</p>
                    </div>

                    <div className="comments">
                        <div className="comment">
                            comment1
                        </div>
                        <div className="comment">
                            comment2
                        </div>
                    </div>
                </div>
                :
                <div>Загрузка данных</div>
            }
        </div>
    )
}
