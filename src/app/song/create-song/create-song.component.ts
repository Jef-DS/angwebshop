import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Song2 } from 'src/app/model/song2';
import { Song2HttpService } from 'src/app/services/song2-http.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  song:Song2;
  @Output() onSongCreated = new EventEmitter<Song2>();
  constructor(private songService:Song2HttpService) {
    this.song = new Song2(0,'',0,'');
   }

  ngOnInit(): void {
  }
  createSong(form:NgForm):void{
    if (form.valid){
      this.songService.createSong(this.song).subscribe({
        next: (result:any) => {
          this.song = new Song2(0,'',0,'');
          form.resetForm(this.song);
          this.onSongCreated.emit(this.song);
        }
      })
    }
  }
}