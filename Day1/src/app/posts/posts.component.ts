import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: any = [];
  users: any = [];
  error: any = null;

  constructor(
    private postService: PostsService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        this.error = error;
      },
    });
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  navigateToComments(postId: any) {
    // TODO: Navigate to the comments of the related post
    this.router.navigate(['post/comments/', postId]);
  }
}
