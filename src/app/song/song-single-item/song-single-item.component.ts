import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/model/song';

import { Song2 } from 'src/app/model/song2';
import { Song2HttpService } from 'src/app/services/song2-http.service';

@Component({
  selector: 'app-song-single-item',
  templateUrl: './song-single-item.component.html',
  styleUrls: ['./song-single-item.component.css']
})
export class SongSingleItemComponent implements OnInit {
  @Input() song!:Song2;
  @Output() onSongDeleted = new EventEmitter<Song2>();
  constructor(private songService:Song2HttpService) { }

  ngOnInit(): void {
  }
  delete():void{
    this.songService.deleteSong(this.song).subscribe(() => {
      this.onSongDeleted.emit(this.song);
    });
  }
}