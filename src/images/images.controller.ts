import { Get, Controller } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  async fetchFeedImages(): Promise<string[]> {
    return this.imagesService.fetchFeedImages();
  }
}
