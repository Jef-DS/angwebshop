import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Song } from 'src/app/model/song';
import { Song2 } from 'src/app/model/song2';
import { Song2HttpService } from 'src/app/services/song2-http.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  public songs: Song2[]
  constructor(private songService:Song2HttpService) {
    this.songs = new Array<Song2>();
   }

  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.songService.getSongs().pipe(map(sList => {
      return sList.map(s => Song2.copySong(s))
    })).subscribe({
      next: (pList:Song2[]) => {
        this.songs = pList;
      }
    })
  }

}