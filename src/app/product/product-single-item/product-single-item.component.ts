import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-single-item',
  templateUrl: './product-single-item.component.html',
  styleUrls: ['./product-single-item.component.css']
})
export class ProductSingleItemComponent implements OnInit {
  @Input() product!:Product; //non-null assertion operator !
  @Output('productClick') clickProduct= new EventEmitter<Product>();
  @Output() doublePrice = new EventEmitter<Product>();

  constructor() { }  // no initialisation anymore, the value will be provided by the parent component

  ngOnInit(): void {
  }

  toggleImportant(){
    this.clickProduct.emit(this.product); //send the product to the parent
  }

}