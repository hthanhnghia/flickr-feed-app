import { Injectable, HttpService } from '@nestjs/common';

// External api (Flickr) responses interfaces
export interface ExternalFeedResponse {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items?: ExternalFeedResponseItem[] | null;
}
export interface ExternalFeedResponseItem {
  title: string;
  link: string;
  media: ExternalFeedResponseItemMedia;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}
export interface ExternalFeedResponseItemMedia {
  m: string;
}

// Our service responses interfaces
export interface FeedResponse {
  count: number;
  value: FeedResponseItem[];
}
export interface FeedResponseItem {
  title: string;
  link: string;
  media_url: string;
  date_taken: string;
  description: string;
  published: string;
  tags: string;
}

@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}
  private readonly IMAGE_FEED_URL: string =
    'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

  // Get the list of image urls from the server returned Feed data
  private getAllFeeds(feedDataJson: ExternalFeedResponse): FeedResponse {
    let responseItems: FeedResponseItem[] = [];
    feedDataJson.items.forEach((item: ExternalFeedResponseItem) => {
      if (item.media && item.media.m) {
        let responseItem: FeedResponseItem = {
          title: item.title,
          link: item.link,
          media_url: item.media.m,
          date_taken: item.date_taken,
          description: item.description,
          published: item.published,
          tags: item.tags,
        };
        responseItems.push(responseItem);
      }
    });
    const response: FeedResponse = {
      count: responseItems.length,
      value: responseItems,
    };
    return response;
  }

  // HTTP request to the Flickr server to fetch the image feed data
  async fetchDataFromServer(
    searchParam: string,
  ): Promise<ExternalFeedResponse> {
    try {
      const url =
        this.IMAGE_FEED_URL +
        (searchParam && searchParam != '' ? `&tags=${searchParam}` : '');
      const response = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
    return null;
  }

  async fetchFeedImages(searchParam: string = ''): Promise<FeedResponse> {
    let response: FeedResponse = { count: 0, value: [] };
    try {
      const feedDataJson: ExternalFeedResponse = await this.fetchDataFromServer(
        searchParam,
      );
      if (feedDataJson) {
        response = this.getAllFeeds(feedDataJson);
      }
    } catch (error) {
      console.log('error', error);
    }
    return response;
  }
}
