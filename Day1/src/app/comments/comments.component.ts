import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from '../Shared_Classes_&_types/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  commentsArray: any = [];
  error: any;
  commentEndpointURL: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let postID: any = params.get('id');
      this.commentEndpointURL = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
    });
    this.http
      .get<IComment[]>(this.commentEndpointURL)
      .pipe(
        catchError((error) =>
          throwError(() => error.message || 'Internal Server error')
        )
      )
      .subscribe({
        next: (data) => {
          this.commentsArray = data;
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  ngAfterViewInit(): void {}
}
