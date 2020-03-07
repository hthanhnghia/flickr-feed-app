import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import {
  ImagesService,
  ExternalFeedResponse,
  FeedResponse,
} from './images.service';
import { MOCK_FLICKR_API_FEED_DATA, MOCK_FETCH_IMAGES_DATA } from './constants';

describe('ImagesService', () => {
  let imagesService: ImagesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ImagesService],
    }).compile();

    imagesService = moduleRef.get<ImagesService>(ImagesService);
  });

  describe('ImagesService: fetch feed images', () => {
    it('should return a feed response in valid format', async () => {
      // Mock the HTTP call fetchDataFromServer() from ImagesService
      const feedApiResult: ExternalFeedResponse = MOCK_FLICKR_API_FEED_DATA;
      const feedImagesDataResult: FeedResponse = MOCK_FETCH_IMAGES_DATA;

      jest
        .spyOn(imagesService, 'fetchDataFromServer')
        .mockImplementation(() => Promise.resolve(feedApiResult));

      expect(await imagesService.fetchFeedImages()).toStrictEqual(
        feedImagesDataResult,
      );
    });
  });
});
