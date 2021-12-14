import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  createSong(form:NgForm):void{
    if (form.valid){
      this.onSongCreated.emit(this.song);
      this.song = new Song('',0);
      form.resetForm(this.song);
    }
  }
}