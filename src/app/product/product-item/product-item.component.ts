import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public products:Product[]; // an array of products
  constructor() { 
    //initialisation of an array of products
    this.products = [new Product('penc', 'pencil', 2.1), new Product('tabl', 'table', 10.3),  new Product('chai', 'chair', 5.4)];
  }

  ngOnInit(): void {
  }
  toggleImportant(index: number):void{
    this.products[index].toggleImportant();
  }
}