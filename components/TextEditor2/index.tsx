'use client';
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

type Props = {
  value: string;
  onChange: (content: string) => void;
};

const TinyMCEEditor: React.FC<Props> = ({ value, onChange }) => {
  const handleEditorChange = (content: string) => {
    onChange(content);
    console.log(content);
  };
  return (
    <Editor
      apiKey='rqlvu6fe8q9nsi3c87guwzf1w24g8niu9a5d8ekmi5havpoi'
      init={{
        height: 500,
        plugins: 'image',
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | image | help',
        file_picker_types: 'image', // Указываем типы файлов, которые можно загружать
        file_picker_callback: (callback, value, meta) => {
          if (meta.filetype === 'image') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.onchange = () => {
              const file = input.files![0];
              const reader = new FileReader();

              reader.onload = () => {
                const id = 'blobid' + Math.random().toString(36).substring(7);
                const blobCache = (window as any).tinymce.activeEditor
                  .editorUpload.blobCache;
                const base64 = (reader.result as string).split(',')[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                callback(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
            input.click();
          }
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
