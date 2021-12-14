import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product:Product;
  constructor() { 
    this.product = new Product('PENC', 'pencil', 1.5)
  }

  ngOnInit(): void {
  }
  toggleImportant():void { //the function has no return value
    this.product.toggleImportant();
  }
  get code():string{
    return this.product.code;
  }
  get name():string{
    return this.product.name;
  }
  get price(): number{
    return this.product.price;
  }
  get isImportant(): boolean{
    return this.product.isImportant;
  }
}