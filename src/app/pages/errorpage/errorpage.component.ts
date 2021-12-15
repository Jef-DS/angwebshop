import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  public errormessage= 'The page cannot be reached';
  constructor() { }

  ngOnInit(): void {
  }
}