export class Image {
  title: string;
  link: string;
  media_url: string;
  date_taken: string;
  description: string;
  published: string;
  tags: string;
}

export class ImageResponse {
  count: number;
  value: Image[];
}
