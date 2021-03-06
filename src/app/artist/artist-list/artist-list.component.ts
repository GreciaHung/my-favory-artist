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
  loading = false;
  listType: ListType;
  ListType = ListType;

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
      this.loading = res.loading;
      this.listType = res.data.list_type;
      this.artistList = res.data.artist_list;
    });

    this.artistManager.getArtist();
  }

  search(searchValue: string) {
    if (searchValue) {
      this.artistManager.getArtist(ListType.search, searchValue, '100');
    } else {
      this.artistManager.getArtist();
    }
  }

  addFavorite(id: number) {
    this.artistManager.addFavoriteArtist(id);
  }

  viewFavorites() {
    this.artistManager.getArtist(this.listType !== ListType.favorites ? ListType.favorites : ListType.top);
  }

  openDetails(artist: ArtistData) {
    this.dialog.open(ArtistDetailsComponent, {
      autoFocus: false,
      data: artist
    });
  }

}
