'use client';
import React, { useState } from 'react';
import { NextPage } from 'next';
import { useNews } from '@/app/stores/newsStore';

import TinyMCEEditor from '@/components/TextEditor2';

const TextEditor: NextPage = () => {
  const { addNews, deleteNews } = useNews((state) => ({
    addNews: state.addNews,
    deleteNews: state.deleteNews,
  }));
  const [newsTitle, setNewsTitle] = useState<string>('');
  //const [newsDescription, setNewsDescription] = useState<string>('');
  const [newsContent, setNewsContent] = useState<string>('');
  const [newsCover, setNewsCover] = useState<string>('');
  const handleContentChange = (newContent: string) => {
    setNewsContent(newContent);
  };

  const toBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const src = reader.result;
          setNewsCover(src);
        }
      };
    }
  };

  const onUpdateValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'title':
        setNewsTitle(e.currentTarget.value);
        break;
      case 'description':
        //setNewsDescription(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onAddNews = () => {
    const news = {
      title: newsTitle,
      cover: newsCover,
      //description: newsDescription,
      content: newsContent,
      tags: [],
    };

    addNews(news);

    setNewsTitle('');
    //setNewsDescription('');
    setNewsContent('');
    setNewsCover('');
  };

  return (
    <div style={{ color: 'black' }}>
      <p style={{ color: 'white' }}>There will be text-editor ^-^</p>
      <input
        name='title'
        value={newsTitle}
        onChange={onUpdateValueInput}
        placeholder='Введите название новости'
      />
      <input
        name='description'
        //value={newsDescription}
        onChange={onUpdateValueInput}
        placeholder='Введите краткое описание новости'
      />
      <input
        style={{ backgroundColor: 'white' }}
        type='file'
        name='cover'
        onChange={toBase64}
        placeholder='Введите название новости'
      />
      <TinyMCEEditor value={newsContent} onChange={handleContentChange} />
      <button onClick={onAddNews}>отправить</button>
      <img src={newsCover} alt='img' />
    </div>
  );
};
export default TextEditor;
