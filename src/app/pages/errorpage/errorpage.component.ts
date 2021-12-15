import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  public errormessage:string;
  constructor(private route:ActivatedRoute) {
    const url = this.route.snapshot.url.join('/')
    this.errormessage=`Unknow URL: ${url}`;
   }

  ngOnInit(): void {
  }
}