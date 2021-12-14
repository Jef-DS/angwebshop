import { Injectable } from '@angular/core';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService implements Iterable<Song> {
  #songs = [
    new Song('Waterloo', 1974),
    new Song("J'aime la vie", 1986,"Sandra Kim"),
    new Song("Zitti e buoni", 2020, 'Måneskin'),
    new Song('I still have faith in you', 2021)
  ];
  constructor() { }
  [Symbol.iterator](): Iterator<Song, any, undefined> {
    return this.#songs[Symbol.iterator]();
  }
  createSong(song:Song):boolean{
    const foundSong = this.#songs.find(s => s.title === song.title);
    if (foundSong) return false;
    this.#songs.push(song);
    return true;
  }
}