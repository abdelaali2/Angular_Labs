import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'E-Commerce Application';

  @ViewChild(ProductsComponent) product: ProductsComponent;
  showProducts: boolean = false;

  invokeChild() {
    this.showProducts = true;

    this.product.renderValues();
  }
}
