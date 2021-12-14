import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongInterface } from '../model/song-interface';
import { Song2 } from '../model/song2';

@Injectable({
  providedIn: 'root'
})
export class Song2HttpService {

  constructor(private client:HttpClient) { }
  createSong(s:Song2):Observable<any>{
    return this.client.post("http://localhost:3000/songs", s);
  }
  getSongs():Observable<SongInterface[]>{
    return this.client.get<SongInterface[]>("http://localhost:3000/songs");
  }
  deleteSong(s:Song2):Observable<any>{
    return this.client.delete(`http://localhost:3000/songs/${s.id}`);
  }
}