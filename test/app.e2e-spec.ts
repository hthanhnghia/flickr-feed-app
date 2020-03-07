import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpService, HttpModule } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import {
  MOCK_FLICKR_API_FEED_DATA,
  MOCK_FETCH_IMAGES_DATA,
} from './../src/images/constants';
import { FeedResponse } from '../src/images/images.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('/api');
    httpService = moduleFixture.get<HttpService>(HttpService);
    await app.init();
  });

  it('/api/images (GET) endpoint should return the list of image links', async () => {
    const result: AxiosResponse = {
      data: MOCK_FLICKR_API_FEED_DATA,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
    const expectedAllImagesData: FeedResponse = MOCK_FETCH_IMAGES_DATA;

    const response: request.Response = await request(app.getHttpServer())
      .get('/api/images')
      .expect(200);
    expect(response.body).toStrictEqual(expectedAllImagesData);
  });
});
