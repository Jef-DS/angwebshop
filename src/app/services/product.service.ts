import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    new Product('PENC', 'Pencil', 1.25),
    new Product('BLBO', 'Blackboard', 20.95),
    new Product('RULE', 'Ruler', 2.05, true)
  ];
  constructor() { }
  createProduct(product:Product):boolean{
    const foundProduct = this.products.find( e => e.code === product.code);
    if (foundProduct) return false;
    this.products.push(product);
    return true;
  }
  toggleImportant(product:Product):void{
    const foundProduct = this.products.find( p => p.code === product.code);
    foundProduct?.toggleImportant();
  }

}