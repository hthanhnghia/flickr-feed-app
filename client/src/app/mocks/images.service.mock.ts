import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageResponse } from '../image';

const MOCK_DATA: ImageResponse = {
  count: 1,
  value: [
    {
      title: 'Wilson',
      link: 'https://www.flickr.com/photos/pete4ducks/49633257691/',
      media_url:
        'https://live.staticflickr.com/65535/49633257691_d4c6f6ab19_m.jpg',
      date_taken: '2015-01-31T19:34:37-08:00',
      description: 'test description',
      published: '2020-03-08T05:45:45Z',
      tags: 'wilson animal dog blackandwhite portrait macro beaverton oregon',
    },
  ],
};

@Injectable()
export class ImagesServiceMock {
  constructor() {}

  getImages(searchQuery: string): Observable<ImageResponse> {
    return of(MOCK_DATA);
  }
}
