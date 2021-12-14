import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product2 } from 'src/app/model/product2';

import { Product2HttpService } from 'src/app/services/product2-http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product2;
  @Output() onProductCreated: EventEmitter<Product2>;
  constructor(private productService:Product2HttpService) { 
    this.product = new Product2(0,'','', 0);
    this.onProductCreated = new EventEmitter<Product2>();
  }

  ngOnInit(): void {
  }
  createProduct(form:NgForm):void{
    if (form.valid){
      this.productService.createProduct(this.product).subscribe({ 
        next: (result:any) => {
          this.product = new Product2(0,'', '', 0);
          form.resetForm(this.product);
          this.onProductCreated.emit(this.product);
          console.log(result);
        },
        complete:() => console.log('complete')
      })
    }
  }
}