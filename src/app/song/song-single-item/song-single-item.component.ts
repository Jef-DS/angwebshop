import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-song-single-item',
  templateUrl: './song-single-item.component.html',
  styleUrls: ['./song-single-item.component.css']
})
export class SongSingleItemComponent implements OnInit {
  @Input() song!:Song;
  constructor() { }

  ngOnInit(): void {
  }

}