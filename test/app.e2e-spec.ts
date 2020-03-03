import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpService, HttpModule } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import {
  MOCK_FLICKR_API_FEED_DATA,
  MOCK_FETCH_IMAGE_LINKS_DATA,
} from './../src/images/constants';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    httpService = moduleFixture.get<HttpService>(HttpService);
    await app.init();
  });

  it('/ (GET) endpoint should return the list of image links', async () => {
    const result: AxiosResponse = {
      data: MOCK_FLICKR_API_FEED_DATA,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
    const expectedAllImageLinks: string = JSON.stringify(
      MOCK_FETCH_IMAGE_LINKS_DATA,
    );

    const response = await request(app.getHttpServer())
      .get('/')
      .expect(200);
    expect(response.text).toEqual(expectedAllImageLinks);
  });
});
