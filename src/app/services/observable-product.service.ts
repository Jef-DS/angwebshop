import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ObservableProductService {
  #products = [
    new Product('PENC', 'Pencil', 1.25),
    new Product('BLBO', 'Blackboard', 20.95),
    new Product('RULE', 'Ruler', 2.05, true)
  ];
  constructor() { }
  createProduct(p:Product): Observable<any>{
    const foundProduct = this.#products.find(e => e.code === p.code);
    if(foundProduct) return throwError(() => 
         ({msg:'code already exists', code:'NOTUNIQUE' })
      ); //return an Observable error
    this.#products.push(p);
    return ObservableOf({msg:`product added with code ${p.code}`});
 }
 getProducts():Observable<Product[]>{
   return ObservableOf(this.#products); //create an Observable of array or Products
 }
}