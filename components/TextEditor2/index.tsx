'use client';
import React, { useState, useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';
import dynamic from 'next/dynamic';

const TextEditorJodit = () => {
  const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
  // const editor = useRef(null);
  const [content, setContent] = useState('');
  console.log(content);
  // const config = {
  //   language: 'ru',
  //   tabIndex: 1,

  // };
  const config = {
    uploader: {
      insertImageAsBase64URI: true, // Вставлять изображения в виде base64
      insertImageAsBase64Mime: 'image/png', // MIME тип изображений
      filesVariableName: 'file', // Имя переменной для загрузки файла
      language: 'ru',
      events: {
        files: {
          beforeUpload: (files: any) => {
            // Обработчик загрузки файлов
            console.log('Files', files);
          },
        },
      },
    },
  };
  const handleChange = () => {
    setContent(content);
  };
  return (
    <JoditEditor
      // ref={editor}
      value={content}
      config={config} // tabIndex of textarea
      // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={handleChange}
    />
  );
};
export default TextEditorJodit;
