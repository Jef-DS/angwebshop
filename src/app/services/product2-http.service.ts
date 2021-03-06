import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductInterface } from '../model/product-interface';
import { Product2 } from '../model/product2';

@Injectable({
  providedIn: 'root'
})
export class Product2HttpService {

  constructor(private client:HttpClient) { }
  createProduct(p:Product2):Observable<any>{
    return this.client.post('http://localhost:3000/products', p);
  }
  getProduct(code:string):Observable<ProductInterface>{
    return this.client.get<ProductInterface[]>(`http://localhost:3000/products?code=${code}`)
                      .pipe(map(list => list[0]));
  }
  getProducts():Observable<ProductInterface[]>{
    return this.client.get<ProductInterface[]>('http://localhost:3000/products');
  }
  deleteProduct(p:Product2):Observable<any>{
    return this.client.delete(`http://localhost:3000/products/${p.id}`);
  }
}