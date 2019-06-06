import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meta } from '@angular/platform-browser';

import { PRODUCTS } from '../mocked-product';
import { Product } from '../product';

declare var document

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = PRODUCTS;
  url: String;
  product: Product;

  constructor(private route: ActivatedRoute, private location: Location, private meta: Meta) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.findProductById(id);
    this.url = `https://snipcart-angular-universal.herokuapp.com/${this.location.path()}`;
  }

  ngOnInit() { 
    // document.querySelector('meta[name="og.type"]').setAttribute('content', 'Artwork')
    // document.querySelector('meta[name="og.title"]').setAttribute('content', this.product.name)
    // document.querySelector('meta[name="asset.id"]').setAttribute('content', this.product.id)
    this.meta.addTag({ property: 'og:type', content: 'article' });
    this.meta.addTag({ property: 'og:title', content: this.product.name });
    this.meta.addTag({ property: 'og:description', content: "What is this?" });
    this.meta.addTag({ name: 'asset.id', content: this.product.id });
  }

  findProductById(productId: string): Product {
    return this.products.find(product => product.id === productId);
  }
} 