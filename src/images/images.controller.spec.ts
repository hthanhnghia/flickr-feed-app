import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService, FeedResponse } from './images.service';
import { MOCK_FETCH_IMAGES_DATA } from './constants';

describe('ImagesController', () => {
  let imagesController: ImagesController;
  let imagesService: ImagesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ImagesController],
      providers: [ImagesService],
    }).compile();

    imagesService = moduleRef.get<ImagesService>(ImagesService);
    imagesController = moduleRef.get<ImagesController>(ImagesController);
  });

  describe('ImagesController: fetch feed images', () => {
    it('should return a feed response in valid format', async () => {
      // Mock the fetchFeedImages() function from ImagesService
      const result: FeedResponse = MOCK_FETCH_IMAGES_DATA;
      jest
        .spyOn(imagesService, 'fetchFeedImages')
        .mockImplementation(() => Promise.resolve(result));

      expect(await imagesController.fetchFeedImages({})).toBe(result);
    });
  });

  describe('ImagesController: fetch feed images with search query', () => {
    it('should return a feed response in valid format', async () => {
      // Mock the fetchFeedImages() function from ImagesService
      const result: FeedResponse = MOCK_FETCH_IMAGES_DATA;
      jest
        .spyOn(imagesService, 'fetchFeedImages')
        .mockImplementation(() => Promise.resolve(result));

      expect(
        await imagesController.fetchFeedImages({ search: 'testtag' }),
      ).toBe(result);
    });
  });
});
