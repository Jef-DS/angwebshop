import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    new Product('PENC', 'Pencil', 1.25),
    new Product('BLBO', 'Blackboard', 20.95),
    new Product('RULE', 'Ruler', 2.05, true)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}