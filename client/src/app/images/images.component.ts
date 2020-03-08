import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { Image, ImageResponse } from '../image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  data: Image[] = [];
  isLoadingResults: boolean = true;
  isLoadingError: boolean = false;
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private api: ImagesService) {}

  ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('search');

    this.api.getImages(this.searchQuery).subscribe(
      (res: any) => {
        if (res) {
          this.data = res.value;
          this.isLoadingError = false;
        } else {
          this.isLoadingError = true;
        }
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      },
    );
  }
}
