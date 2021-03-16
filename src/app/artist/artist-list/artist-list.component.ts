import { Component, OnInit } from '@angular/core';
import { MusixService } from 'src/app/shared/services/musix.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
    ArtistList:any = [
    {pais: 'VE', artista:'Shakira', twitter: '1234Q@',fecha: Date()},
    {pais: 'VE', artista:'SMaluma', twitter: '1234Q@',fecha: Date()},
    {pais: 'VE', artista:'Camilo', twitter: '1234Q@',fecha: Date()},
    {pais: 'VE', artista:'Shakira', twitter: '1234Q@',fecha: Date()}
    
];

  constructor(
    private readonly musixService: MusixService
  ) { }

  ngOnInit(): void {
    this.musixService.searchArtist('green day').subscribe(res => {
      console.log(res);
    })
  }

}
