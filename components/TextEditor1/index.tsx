'use client';
import { useEffect, useState } from 'react';
import styles from './text-editor.module.css';
// import Button from '@/components/Button/Button';

const TextEditor1 = () => {
  const [verbum, setVerbum] = useState<any>(null);
  const [editorContent, setEditorContent] = useState<string>('');

  const handleEditorChange = (editorContent: any) => {
    console.log(editorContent);

    setEditorContent(editorContent);
  };

  // const handleSubmitEvent = (event?: React.FormEvent<HTMLButtonElement>) => {
  //   event && event.preventDefault();

  //   // здесь будет запрос для отправки данных на сервер
  //   console.log(editorContent);
  // };

  useEffect(() => {
    if (typeof window !== 'undefined' && !verbum) {
      import('verbum').then((verbumModule) => {
        setVerbum(verbumModule);
      });
    }
  }, []);

  if (!verbum) {
    return null;
  }

  return (
    <div className={styles?.textEditorWrapper}>
      <form>
        <verbum.EditorComposer>
          <verbum.Editor
            hashtagsEnabled={false}
            locale='ru'
            onChange={handleEditorChange}
          >
            <verbum.ToolbarPlugin defaultFontSize='25px'>
              <verbum.FontFamilyDropdown />
              <verbum.FontSizeDropdown />
              <verbum.Divider />
              <verbum.BoldButton />
              <verbum.ItalicButton />
              <verbum.UnderlineButton />
              <verbum.CodeFormatButton />
              <verbum.InsertLinkButton />
              <verbum.TextColorPicker />
              <verbum.BackgroundColorPicker />
              <verbum.TextFormatDropdown />
              <verbum.Divider />
              <verbum.InsertDropdown enablePoll={false} enableTable={false} />
              <verbum.Divider />
              <verbum.AlignDropdown />
            </verbum.ToolbarPlugin>
            {/* вторая панель для разбивки элементов управления и более компактного размещения для мобильных и планшетов (на мобильных скорее всего будет 3 панели) */}
            {/* <verbum.ToolbarPlugin defaultFontSize="25px">
              <verbum.FontFamilyDropdown />
              <verbum.FontSizeDropdown onChange={handleEditorChange} />
              <verbum.Divider />
              <verbum.BoldButton />
              <verbum.ItalicButton />
              <verbum.UnderlineButton />
              <verbum.CodeFormatButton />
              <verbum.InsertLinkButton />
              <verbum.TextColorPicker />
              <verbum.BackgroundColorPicker />
              <verbum.TextFormatDropdown />
              <verbum.Divider />
              <verbum.InsertDropdown enablePoll={false} enableTable={false} />
              <verbum.Divider />
              <verbum.AlignDropdown />
            </verbum.ToolbarPlugin> */}
          </verbum.Editor>
        </verbum.EditorComposer>

        <button
          className={styles.button}
          type='submit'
          onSubmit={(e) => {
            e.preventDefault();
            console.log(editorContent);
          }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default TextEditor1;
