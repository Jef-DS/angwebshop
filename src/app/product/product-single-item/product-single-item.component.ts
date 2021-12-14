import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-product-single-item',
  templateUrl: './product-single-item.component.html',
  styleUrls: ['./product-single-item.component.css']
})
export class ProductSingleItemComponent implements OnInit {
  @Input() product!:Product; //non-null assertion operator !
  constructor() { }  // no initialisation anymore, the value will be provided by the parent component
  ngOnInit(): void {
  }
  toggleImportant(){
    this.product.toggleImportant();
  }
}