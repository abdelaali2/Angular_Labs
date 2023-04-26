import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DiscountOffers } from './Shared_Classes_&_types/DiscountOffers'
import { ICategory } from './Shared_Classes_&_types/ICategory';
import { IProduct } from './Shared_Classes_&_types/IProduct';
import { FormsModule } from '@angular/forms';
import { FilterFromArrayPipe } from './Pipes/filter-from-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterFromArrayPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
  ],
})
export class AppModule {}
