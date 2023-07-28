import { News } from '@/models/News';

const someNews: News[] = [
  {
    id: 0,
    title: 'Какая-то очень актуальная новость',
    date: '01.01.23',
    dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
    img: 'https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg',
    authorName: 'Lucas Clifford',
    comments: [
      {
        comment_id: 0,
        text: 'Это какой-то 1ый комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus velit, interdum sodales purus non, suscipit molestie massa. Fusce rutrum molestie dolor. Integer ut elit nec dolor cursus interdum quis ac orci. Aenean condimentum urna ac molestie ullamcorper. Cras ultricies sem leo, at ultrices magna pharetra ac. Nulla ut molestie nibh, ut tincidunt mi. Maecenas pharetra nibh consequat tortor dignissim, sit amet finibus tortor mollis. Maecenas ac rutrum ligula, at vulputate dui. Aliquam luctus sapien quam, et auctor lectus molestie vel. Nam porta congue sagittis. Proin bibendum gravida lorem, vel viverra ligula accumsan quis. Quisque vel mauris ac lacus aliquet volutpat. Aenean vel mauris vestibulum, sollicitudin metus sit amet, dictum augue.',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 2,
        text: 'Это какой-то 3ий комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
    ],
  },
  {
    id: 1,
    title: 'Новость 2',
    date: '02.01.23',
    dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
    img: 'https://st.depositphotos.com/1011976/2987/i/450/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg',
    authorName: 'Margaret Fisher',
    comments: [
      {
        comment_id: 0,
        text: 'Это какой-то 1ый комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus velit, interdum sodales purus non, suscipit molestie massa. Fusce rutrum molestie dolor. Integer ut elit nec dolor cursus interdum quis ac orci. Aenean condimentum urna ac molestie ullamcorper. Cras ultricies sem leo, at ultrices magna pharetra ac. Nulla ut molestie nibh, ut tincidunt mi. Maecenas pharetra nibh consequat tortor dignissim, sit amet finibus tortor mollis. Maecenas ac rutrum ligula, at vulputate dui. Aliquam luctus sapien quam, et auctor lectus molestie vel. Nam porta congue sagittis. Proin bibendum gravida lorem, vel viverra ligula accumsan quis. Quisque vel mauris ac lacus aliquet volutpat. Aenean vel mauris vestibulum, sollicitudin metus sit amet, dictum augue.',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 2,
        text: 'Это какой-то 3ий комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
    ],
  },
  {
    id: 2,
    title: 'Новость 3',
    date: '03.01.23',
    dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
    img: 'https://bipbap.ru/wp-content/uploads/2017/04/0_19347_bcb12d46_XL.jpg',
    authorName: 'Dominique Collins',
    comments: [
      {
        comment_id: 0,
        text: 'Это какой-то 1ый комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus velit, interdum sodales purus non, suscipit molestie massa. Fusce rutrum molestie dolor. Integer ut elit nec dolor cursus interdum quis ac orci. Aenean condimentum urna ac molestie ullamcorper. Cras ultricies sem leo, at ultrices magna pharetra ac. Nulla ut molestie nibh, ut tincidunt mi. Maecenas pharetra nibh consequat tortor dignissim, sit amet finibus tortor mollis. Maecenas ac rutrum ligula, at vulputate dui. Aliquam luctus sapien quam, et auctor lectus molestie vel. Nam porta congue sagittis. Proin bibendum gravida lorem, vel viverra ligula accumsan quis. Quisque vel mauris ac lacus aliquet volutpat. Aenean vel mauris vestibulum, sollicitudin metus sit amet, dictum augue.',
        author: 'Петя Петров',
        added: '01.01.23',
      },
      {
        comment_id: 2,
        text: 'Это какой-то 3ий комментарий',
        author: 'Петя Петров',
        added: '01.01.23',
      },
    ],
  },
];

export default someNews;
