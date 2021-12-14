import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  songs: Song[];
  constructor() {
    this.songs = [
              new Song('Waterloo', 1974),
              new Song("J'aime la vie", 1986,"Sandra Kim"),
              new Song("Zitti e buoni", 2020, 'Måneskin'),
              new Song('I still have faith in you', 2021)
            ];
  }

  ngOnInit(): void {
  }
}