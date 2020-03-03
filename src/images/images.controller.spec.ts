import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

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
    it('should return an array of image links', async () => {
      // Mock the fetchFeedImages() function from ImagesService
      const result: string[] = ['test_url_1', 'test_url_2'];
      jest
        .spyOn(imagesService, 'fetchFeedImages')
        .mockImplementation(() => Promise.resolve(result));

      expect(await imagesController.fetchFeedImages()).toBe(result);
    });
  });
});
