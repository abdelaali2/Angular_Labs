import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-non-discounted',
  templateUrl: './non-discounted.component.html',
  styleUrls: ['./non-discounted.component.scss'],
})
export class NonDiscountedComponent {
  productList: any[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productList = this.productService.getNonDiscountedProducts();
  }
}
