import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  @Output() onProductCreated: EventEmitter<Product>;
  constructor() { 
    this.product = new Product('','', 0);
    this.onProductCreated = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }
  createProduct():void{
    this.onProductCreated.emit(this.product);
    this.product = new Product('', '', 0);
  }

}