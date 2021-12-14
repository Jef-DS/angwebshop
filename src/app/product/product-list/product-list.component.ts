import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ObservableProductService } from 'src/app/services/observable-product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() title!: string;
  public products$: Observable<Product[]>
  constructor(public productService :ObservableProductService) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}