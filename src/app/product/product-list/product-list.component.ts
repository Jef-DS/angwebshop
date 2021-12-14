import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() title!: string;
  products = [
    new Product('PENC', 'Pencil', 1.25),
    new Product('BLBO', 'Blackboard', 20.95),
    new Product('RULE', 'Ruler', 2.05, true)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  toggleImportant(product:Product):void{
    const foundProduct = this.products.find( p => p.code === product.code);
    foundProduct?.toggleImportant();
  }
}