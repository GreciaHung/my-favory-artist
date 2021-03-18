import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album, AlbumList, ArtistData, Track, TrackList } from '../../global-interfaces';
import { MusixService } from '../../services/musix.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  albumList: Album[] = []
  tackList: Track[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: ArtistData,
    private readonly musixService: MusixService
  ) { }

  ngOnInit(): void {
    this.getAlbums(this.dataModal.artist_id);
  }

  getAlbums(id: number) {
    this.musixService.getArtistAlbums(id)
      .subscribe((res: AlbumList) => {
        this.albumList = res.album_list;
      });
  }

  getTracks(id: number) {
    this.tackList = [];
    this.musixService.getAlbumTracks(id)
      .subscribe((res: TrackList) => {
        this.tackList = res.track_list;
      });
  }

}
