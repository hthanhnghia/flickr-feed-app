import { Get, Controller, Query } from '@nestjs/common';
import { ImagesService, FeedResponse } from './images.service';

class SearchQuery {
  search?: string;
}

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  async fetchFeedImages(@Query() query: SearchQuery): Promise<FeedResponse> {
    const searchQuery: string = query ? query.search : '';
    return this.imagesService.fetchFeedImages(searchQuery);
  }
}
