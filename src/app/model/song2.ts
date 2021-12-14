import { Song } from "./song";
import { SongInterface } from "./song-interface";

export class Song2 extends Song implements SongInterface {
    constructor(public id:number, title:string, year:number, artist: string){
        super(title, year, artist);
    }
    static copySong(s:SongInterface):Song2{
        return new Song2(s.id, s.title, s.year, s.artist);
    }
}