import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DiscountOffers } from './Shared_Classes_&_types/DiscountOffers';
import { ICategory } from './Shared_Classes_&_types/ICategory';
import { IProduct } from './Shared_Classes_&_types/IProduct';
import { FormsModule } from '@angular/forms';
import { FilterFromArrayPipe } from './Pipes/filter-from-array.pipe';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { E404Component } from './e404/e404.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { DiscountedComponent } from './discounted/discounted.component';
import { NonDiscountedComponent } from './non-discounted/non-discounted.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterFromArrayPipe,
    PostsComponent,
    UsersComponent,
    E404Component,
    CommentsComponent,
    DiscountedComponent,
    NonDiscountedComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
  ],
})
export class AppModule {}
