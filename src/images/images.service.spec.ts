import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ImagesService, Feed } from './images.service';
import {
  MOCK_FLICKR_API_FEED_DATA,
  MOCK_FETCH_IMAGE_LINKS_DATA,
} from './constants';

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
    it('should return an array of image links', async () => {
      // Mock the HTTP call fetchDataFromServer() from ImagesService
      const feedApiResult: Feed = MOCK_FLICKR_API_FEED_DATA;
      const feedImageLinksResult: string[] = MOCK_FETCH_IMAGE_LINKS_DATA;

      jest
        .spyOn(imagesService, 'fetchDataFromServer')
        .mockImplementation(() => Promise.resolve(feedApiResult));

      expect(await imagesService.fetchFeedImages()).toStrictEqual(
        feedImageLinksResult,
      );
    });
  });
});
