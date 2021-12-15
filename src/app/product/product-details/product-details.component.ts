import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Product2HttpService } from 'src/app/services/product2-http.service';
import { Product2 } from 'src/app/model/product2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!:Product2;
  constructor(private route:ActivatedRoute, private router:Router, private productService:Product2HttpService) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    this.productService.getProduct(code!).subscribe(p => {this.product=Product2.copyProduct(p);})
  }
  goBack():void{
    this.router.navigateByUrl('/products');
  }
}