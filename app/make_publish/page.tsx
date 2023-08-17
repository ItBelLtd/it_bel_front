import TextEditorJodit from '@/components/TextEditor2';

import { NextPage } from 'next';

const TextEditor: NextPage = () => {
  return (
    <div>
      <p>There will be text-editor ^-^</p>
      <input placeholder='Введите название новости' />
      <input placeholder='Введите краткое описание новости' />
      <TextEditorJodit />
    </div>
  );
};
export default TextEditor;
