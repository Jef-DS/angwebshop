import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  public title: string;
  public year: number;
  constructor() {
    this.title = 'Waterloo';
    this.year = 1974;
  }

  ngOnInit(): void {
  }
}