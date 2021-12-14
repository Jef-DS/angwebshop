import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  song:Song;
  @Output() onSongCreated = new EventEmitter<Song>();
  constructor() {
    this.song = new Song('',0);
   }

  ngOnInit(): void {
  }
  createSong():void{
    this.onSongCreated.emit(this.song);
    this.song = new Song('',0);
  }
}