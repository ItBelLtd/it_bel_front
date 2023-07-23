'use client'
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import {useEffect, useState} from "react";
import someNews from "@/data/News";
import { News } from "@/models/News";
import Image from "next/image";

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
                <>
                    <p>This is News:</p>
                    <h2>{newsData?.title}</h2>
                    <p>{newsData?.date}</p>
                    <p>{newsData?.dscr}</p>
                    {newsData ? <Image
                        src={newsData?.img}
                        width={100}
                        height={100}
                        alt={'image'}
                    /> : ''}
                </>
                :
                <div>Загрузка данных </div>
            }
        </div>
    )
}
