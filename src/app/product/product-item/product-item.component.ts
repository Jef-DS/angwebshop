import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  code: string;
  name: string;
  price: number;
  isImportant: boolean;
  constructor() { 
    this.code = 'PENC';
    this.name = 'Pencil';
    this.price = 1.5;
    this.isImportant = true;
  }

  ngOnInit(): void {
  }

}