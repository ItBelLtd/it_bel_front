'use client';
import { NextPage } from 'next';
import { useState } from 'react';

import TinyMCEEditor from '@/components/TextEditor2';

const TextEditor: NextPage = () => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <div>
      <p>There will be text-editor ^-^</p>
      <input placeholder='Введите название новости' />
      <input placeholder='Введите краткое описание новости' />
      <TinyMCEEditor value={content} onChange={handleContentChange} />
      
    </div>
  );
};
export default TextEditor;
