import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_&_types/DiscountOffers';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  categoryList: any[] = [];

  clientName: string = '';
  isPurchased: boolean = false;
  // viewDiscounted: boolean = false;
  // viewNonDiscounted: boolean = false;
  viewAll: boolean = true;

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productList = this.productService.getAllProducts();
    this.categoryList = this.productService.getAllCategories();
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

  displayDiscounted() {
    this.router.navigate(['discounted'], {
      relativeTo: this.activatedRoute,
    });
    this.viewAll = !this.viewAll;
  }

  displayNonDiscounted() {
    this.router.navigate(['nondiscounted'], {
      relativeTo: this.activatedRoute,
    });
    this.viewAll = !this.viewAll;
  }
}
