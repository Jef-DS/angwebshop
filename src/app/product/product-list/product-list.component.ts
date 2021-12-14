import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Product2 } from 'src/app/model/product2';
import { Product2HttpService } from 'src/app/services/product2-http.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() title!: string;
  public products: Product2[]
  constructor(public productService :Product2HttpService) {
    this.products = new Array<Product2>();
   }

  ngOnInit(): void {
    this.refresh();
  }

  refresh():void{
    this.productService.getProducts().pipe(map(pList => {
      return pList.map(p => Product2.copyProduct(p))
    })).subscribe(pList => {
      this.products = pList;
    })

  }

}