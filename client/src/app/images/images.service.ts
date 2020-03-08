import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';

import { ImageResponse } from '../image';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const API_URL = '/api/images';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getImages(searchQuery: string): Observable<ImageResponse> {
    const url =
      API_URL +
      (searchQuery && searchQuery != '' ? `?search=${searchQuery}` : '');
    return this.http.get<ImageResponse>(url).pipe(
      tap(image => console.log(image)),
      catchError(this.handleError('getImages', null)),
    );
  }
}
