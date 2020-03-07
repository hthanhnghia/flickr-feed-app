import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Image, ImageResponse } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  data: Image[] = [];
  isLoadingResults: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getImages().subscribe(
      (res: any) => {
        this.data = res.value;
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      },
    );
  }
}
