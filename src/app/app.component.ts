import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our webshop';
  aProduct = new Product('PENC', 'Pencil', 1.25);
}
