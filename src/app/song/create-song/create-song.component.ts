import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Song } from 'src/app/model/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  song:Song;
  @Output() onSongCreated = new EventEmitter<Song>();
  constructor(private songService:SongService) {
    this.song = new Song('',0);
   }

  ngOnInit(): void {
  }
  createSong(form:NgForm):void{
    if (form.valid){
      if (this.songService.createSong(this.song)){
        this.song = new Song('',0);
         form.resetForm(this.song);
      }
    }
  }
}