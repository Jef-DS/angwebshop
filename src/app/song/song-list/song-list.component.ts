import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs = [
    new Song('Waterloo', 1974),
    new Song("J'aime la vie", 1986,"Sandra Kim"),
    new Song("Zitti e buoni", 2020, 'Måneskin'),
    new Song('I still have faith in you', 2021)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addSong(song:Song):void{
    this.songs.push(song);
  }
}