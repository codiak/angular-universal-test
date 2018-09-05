import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Project Dependencies
import { PRODUCTS } from '../mocked-product';
import { Product } from '../product';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  url: String;
  product: Product;

  constructor(private route: ActivatedRoute, private location: Location) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.findProductById(id);
    this.url = `https://snipcart-angular-universal.herokuapp.com/${this.location.path()}`;
  }

  ngOnInit() {
  }

  findProductById(productId: string): Product {
    return this.products.find(product => product.id === productId);
  }

}
