'use client';
import { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = () => {
  const [textEditor, setTextEditor] = useState<any>(null);
  const [editorContent, setEditorContent] = useState<string>('');

  const handleEditorChange = (editorState: string) => {
    setEditorContent(editorState);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-draft-wysiwyg').then((Editor) => {
        setTextEditor(Editor);
      });
    }
  }, []);

  if (!textEditor) {
    return null;
  }

  return (
    <textEditor.Editor onChange={handleEditorChange} localization={{
      locale: 'ru',
    }} />
  );
};

export default TextEditor;
