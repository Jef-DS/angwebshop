import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  #song: Song;
  constructor() {
    this.#song = new Song('Waterloo', 1974);
  }

  ngOnInit(): void {
  }
  get title():string{
    return this.#song.title;
  }
  get year(): number{
    return this.#song.year;
  }
  get artist(): string{
    return this.#song.artist;
  }

}