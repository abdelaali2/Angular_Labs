import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_&_types/DiscountOffers';
import { ICategory } from '../Shared_Classes_&_types/ICategory';
import { IProduct } from '../Shared_Classes_&_types/IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers = DiscountOffers.TenPercent;
  storeName: string = 'My Store';
  storeLogo: string = '../assets/logo.png';
  productList: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 10,
      price: 20,
      img: '../assets/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 5,
      price: 30,
      img: '../assets/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 2,
      price: 50,
      img: '../assets/product3.jpg',
    },
  ];
  categoryList: ICategory[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
  clientName: string = '';
  isPurchased: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onBuy() {
    this.isPurchased = true;
  }

  return() {
    this.isPurchased = false;
  }
}
