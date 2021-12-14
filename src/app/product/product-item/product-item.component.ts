import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public code: string;
  public name: string;

  constructor() {
    this.code = 'PENC';
    this.name = 'Pencil'
  }

  ngOnInit(): void {
  }

}