import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product2 } from 'src/app/model/product2';
import { Product2HttpService } from 'src/app/services/product2-http.service';

@Component({
  selector: 'app-product-single-item',
  templateUrl: './product-single-item.component.html',
  styleUrls: ['./product-single-item.component.css']
})
export class ProductSingleItemComponent implements OnInit {
  @Input() product!:Product2; //non-null assertion operator !
  @Output() onProductDeleted: EventEmitter<Product2>
  constructor(private productService:Product2HttpService) { 
    this.onProductDeleted = new EventEmitter<Product2>();
  }  
  delete():void{
    this.productService.deleteProduct(this.product).subscribe(() => {
      this.onProductDeleted.emit(this.product);
    })
  }
  ngOnInit(): void {
  }

}