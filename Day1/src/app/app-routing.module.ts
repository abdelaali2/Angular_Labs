import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { E404Component } from './e404/e404.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsComponent } from './products/products.component';
import { DiscountedComponent } from './discounted/discounted.component';
import { NonDiscountedComponent } from './non-discounted/non-discounted.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'discounted',
        component: DiscountedComponent,
      },
      {
        path: 'nondiscounted',
        component: NonDiscountedComponent,
      },
    ],
  },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/comments/:id', component: CommentsComponent },
  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
