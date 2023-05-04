import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../Shared_Classes_&_types/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  postsEndpointURL: string = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.postsEndpointURL)
      .pipe(
        catchError((error) =>
          throwError(() => error.message || 'Internal Server error')
        )
      );
  }
}
