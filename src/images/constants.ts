import { Feed } from './images.service';

export const MOCK_FLICKR_API_FEED_DATA: Feed = {
  title: 'Uploads from everyone',
  link: 'https://www.flickr.com/photos/',
  description: '',
  modified: '2020-03-03T07:51:41Z',
  generator: 'https://www.flickr.com',
  items: [
    {
      title: ' ',
      link: 'https://www.flickr.com/photos/158018632@N04/49612223243/',
      media: {
        m: 'https://live.staticflickr.com/65535/49612223243_4f9e63713f_m.jpg',
      },
      date_taken: '2020-03-03T14:24:48-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/158018632@N04/">dainguyen99999</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/158018632@N04/49612223243/" title=" "><img src="https://live.staticflickr.com/65535/49612223243_4f9e63713f_m.jpg" width="180" height="240" alt=" " /></a></p> ',
      published: '2020-03-03T07:51:41Z',
      author: 'nobody@flickr.com ("dainguyen99999")',
      author_id: '158018632@N04',
      tags: '',
    },
    {
      title: '20200229_160950',
      link: 'https://www.flickr.com/photos/185888701@N02/49612223293/',
      media: {
        m: 'https://live.staticflickr.com/65535/49612223293_fcbac4a882_m.jpg',
      },
      date_taken: '2020-02-29T16:09:50-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/185888701@N02/">florhorvat</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/185888701@N02/49612223293/" title="20200229_160950"><img src="https://live.staticflickr.com/65535/49612223293_fcbac4a882_m.jpg" width="240" height="180" alt="20200229_160950" /></a></p> ',
      published: '2020-03-03T07:51:44Z',
      author: 'nobody@flickr.com ("florhorvat")',
      author_id: '185888701@N02',
      tags: '',
    },
  ],
};

export const MOCK_FETCH_IMAGE_LINKS_DATA: string[] = [
  'https://live.staticflickr.com/65535/49612223243_4f9e63713f_m.jpg',
  'https://live.staticflickr.com/65535/49612223293_fcbac4a882_m.jpg',
];
