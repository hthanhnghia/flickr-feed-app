import { Get, Controller } from '@nestjs/common';
import { ImagesService, FeedResponse } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  async fetchFeedImages(): Promise<FeedResponse> {
    return this.imagesService.fetchFeedImages();
  }
}
