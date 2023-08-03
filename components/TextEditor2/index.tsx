'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import dynamic from 'next/dynamic';

const TextEditor = () => {
  const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const config = {
    language: 'ru',
    tabIndex: 1,
  };
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config} // tabIndex of textarea
      // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => setContent(newContent)}
    />
  );
};
export default TextEditor;
