import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Album, AlbumList, ArtistData, Track, TrackList } from '../../global-interfaces';
import { ArtistManagerService } from '../../managers/artist-manager/artist-manager.service';
import { MusixService } from '../../services/musix.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  albumList: Album[] = []
  tackList: Track[] = [];
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: ArtistData,
    private readonly artistManager: ArtistManagerService,
    private readonly musixService: MusixService
  ) { }

  ngOnInit(): void {
    this.getAlbums(this.dataModal.artist_id);
  }

  getAlbums(id: number) {
    this.loading = true;
    this.musixService.getArtistAlbums(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: AlbumList) => {
        this.albumList = res.album_list;
      });
  }

  getTracks(id: number) {
    this.loading = true;
    this.tackList = [];
    this.musixService.getAlbumTracks(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: TrackList) => {
        this.tackList = res.track_list;
      });
  }

  addFavorite(id: number) {
    this.artistManager.addFavoriteArtist(id);
  }
}
