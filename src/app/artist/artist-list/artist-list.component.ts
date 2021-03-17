import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistDetailsComponent } from '../../shared/dialogs/artist-details/artist-details.component';
import { Artist, ArtistData, ArtistList, DataRequest } from '../../shared/global-interfaces';
import { ArtistManagerService } from '../../shared/managers/artist-manager/artist-manager.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artistList: Artist[] = [];

  constructor(
    private readonly artistManager: ArtistManagerService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.artistManager.artistList$.subscribe((res: DataRequest<ArtistList>) => {
      this.artistList = res.data.artist_list;
    });

    this.artistManager.getArtist();
  }

  search(searchValue: string) {
    this.artistManager.getArtist(searchValue);
  }

  addFavorite(id: number) {
    this.artistManager.addFavoriteArtist(id);
  }

  openDetails(artist: ArtistData) {
    this.dialog.open(ArtistDetailsComponent, {
      autoFocus: false,
      data: artist
    });
  }

}
