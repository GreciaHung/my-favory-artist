import { Component, OnInit } from '@angular/core';
import { Artist, ArtistList, DataRequest } from 'src/app/shared/global-interfaces';
import { ArtistManagerService } from 'src/app/shared/managers/artist-manager/artist-manager.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artistList: Artist[] = [];

  constructor(
    private readonly artistManager: ArtistManagerService
  ) { }

  ngOnInit(): void {
    this.artistManager.artistList$.subscribe((res: DataRequest<ArtistList>) => {
      console.log(res);
      this.artistList = res.data.artist_list;
    });

    this.artistManager.getArtist();
  }

  search(searchValue: string) {
    this.artistManager.getArtist(searchValue);
  }

}
