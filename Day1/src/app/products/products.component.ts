import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_&_types/DiscountOffers';
import { ICategory } from '../Shared_Classes_&_types/ICategory';
import { IProduct } from '../Shared_Classes_&_types/IProduct';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers = DiscountOffers.TenPercent;
  storeName: string = 'My Store';
  storeLogo: string = '../assets/logo.png';

  productList: any[] = [];

  categoryList: ICategory[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
  clientName: string = '';
  isPurchased: boolean = false;

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productList = this.productService.getAllProducts();
  }

  onBuy() {
    this.isPurchased = true;
  }

  return() {
    this.isPurchased = false;
  }

  renderValues() {
    // TODO: call the Service named ProductService
    this.productService.getAllProducts();
  }
}
