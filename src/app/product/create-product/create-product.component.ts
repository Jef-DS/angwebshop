import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ObservableProductService } from 'src/app/services/observable-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  @Output() onProductCreated: EventEmitter<Product>;
  constructor(private productService:ObservableProductService) { 
    this.product = new Product('','', 0);
    this.onProductCreated = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }
  createProduct(form:NgForm):void{
    if (form.valid){
      this.productService.createProduct(this.product).subscribe({ 
        next: (result:any) => {
          this.product = new Product('', '', 0);
          form.resetForm(this.product);
          console.log(result);
        },
        error:(err:any) => {
          console.log(err);
          if (err.code === 'NOTUNIQUE'){
            form.controls['code'].setErrors({notUnique:true});
          }else{
            console.log(err.msg);
            throw Error('unknown error');
          }
        },
        complete:() => console.log('complete') //to check if the subscription completed automatically
      })
    }
  }
}