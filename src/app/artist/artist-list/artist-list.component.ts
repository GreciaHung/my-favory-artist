import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListType } from '../../shared/global-enums';
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
  listType: ListType;
  ListType =  ListType;

  titleType = {
    favorites: 'Favorite List',
    top: 'In the top 12',
    search: 'Search results'
  }

  constructor(
    private readonly artistManager: ArtistManagerService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.artistManager.artistList$.subscribe((res: DataRequest<ArtistList>) => {
      this.listType = res.data.list_type;
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

  viewFavorites() {
    this.artistManager.getArtist(null, this.listType !== ListType.favorites);
  }

  openDetails(artist: ArtistData) {
    this.dialog.open(ArtistDetailsComponent, {
      autoFocus: false,
      data: artist
    });
  }

}
