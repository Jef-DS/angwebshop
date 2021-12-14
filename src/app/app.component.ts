import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  template: '<span>{{ title }}</span>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our webshop';
}
