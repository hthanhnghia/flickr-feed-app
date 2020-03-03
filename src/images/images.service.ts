import { Injectable, HttpService } from '@nestjs/common';

export interface Feed {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items?: FeedItem[] | null;
}
export interface FeedItem {
  title: string;
  link: string;
  media: FeedItemMedia;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}
export interface FeedItemMedia {
  m: string;
}

@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}
  private readonly imageFeedUrl =
    'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

  // Get the list of image urls from the server returned Feed data
  private getAllImageLinks(feedDataJson: Feed): string[] {
    let allImageLinks: string[] = [];
    feedDataJson.items.forEach((item: FeedItem) => {
      if (item.media && item.media.m) {
        allImageLinks.push(item.media.m);
      }
    });
    return allImageLinks;
  }

  // HTTP request to the Flickr server to fetch the image feed data
  async fetchDataFromServer(): Promise<Feed> {
    try {
      const response = await this.httpService
        .get(this.imageFeedUrl)
        .toPromise();
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
    return null;
  }

  async fetchFeedImages(): Promise<string[]> {
    let allImageLinks: string[] = [];
    try {
      const feedDataJson: Feed = await this.fetchDataFromServer();
      if (feedDataJson) {
        allImageLinks = this.getAllImageLinks(feedDataJson);
      }
    } catch (error) {
      console.log('error', error);
    }
    return allImageLinks;
  }
}
