import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() title!: string;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  get products():Iterable<Product>{
    return this.productService;
  }

  toggleImportant(product:Product):void{
    this.productService.toggleImportant(product);
  }
}