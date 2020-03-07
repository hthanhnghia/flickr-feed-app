import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';

import { Image } from './image';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const API_URL = '/api/images';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL).pipe(
      tap(image => console.log('fetched image')),
      catchError(this.handleError('getImages', [])),
    );
  }
}
