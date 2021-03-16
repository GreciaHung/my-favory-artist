import { Component, OnInit } from '@angular/core';
import { ArtistList, DataRequest } from 'src/app/shared/global-interfaces';
import { ArtistManagerService } from 'src/app/shared/managers/artist-manager/artist-manager.service';

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
    private readonly artistManager: ArtistManagerService
  ) { }

  ngOnInit(): void {
    this.artistManager.artistList$.subscribe((res: DataRequest<ArtistList>) => {
      console.log(res);
    });

    // this.artistManager.getArtistTop();
    this.artistManager.getArtistSearch('Shakira');
  }

}
