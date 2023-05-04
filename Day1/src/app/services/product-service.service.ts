import { Injectable } from '@angular/core';
import { IProduct } from '../Shared_Classes_&_types/IProduct';
import { ICategory } from '../Shared_Classes_&_types/ICategory';
import { DiscountOffers } from '../Shared_Classes_&_types/DiscountOffers';

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
      discount: DiscountOffers.NoDiscount,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 5,
      price: 30,
      img: '../assets/product2.jpg',
      discount: DiscountOffers.FifteenPercent,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 2,
      price: 50,
      img: '../assets/product3.jpg',
      discount: DiscountOffers.TenPercent,
    },
  ];

  categoryList: ICategory[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
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

  getDiscountedProducts(products: IProduct[]): IProduct[] {
    return products.filter(
      (product) => product.discount !== DiscountOffers.NoDiscount
    );
  }

  getNonDiscountedProducts(products: IProduct[]): IProduct[] {
    return products.filter(
      (product) => product.discount === DiscountOffers.NoDiscount
    );
  }

  getAllCategories(): any[] {
    return this.categoryList;
  }
}
