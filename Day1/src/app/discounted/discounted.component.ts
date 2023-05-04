import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-discounted',
  templateUrl: './discounted.component.html',
  styleUrls: ['./discounted.component.scss'],
})
export class DiscountedComponent {
  productList: any[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productList = this.productService.getDiscountedProducts();
  }
}
