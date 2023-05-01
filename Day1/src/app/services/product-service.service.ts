import { Injectable } from '@angular/core';
import { IProduct } from '../Shared_Classes_&_types/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

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

  getAllProducts(): any[] {
    return this.productList;
  }

  getProductByID(ID: any): any {
    if (isNaN(ID)) {
      return null;
    }

    this.productList.forEach((product) => {
      let matchedProduct: any = null;
      if (product.id === ID) {
        matchedProduct = product;
      }
      return matchedProduct;
    });
  }
}
