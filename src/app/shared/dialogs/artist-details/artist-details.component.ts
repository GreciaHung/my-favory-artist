import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistData } from '../../global-interfaces';
import { MusixService } from '../../services/musix.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  panelOpenState = false;
  AlbumList=[
    {album_id:'01',album_name:'gatitos'},
    {album_id:'02',album_name:'perros'},
  ]

  constructor(
    
    @Inject(MAT_DIALOG_DATA) public dataModal: ArtistData,
    private readonly musixService: MusixService
  ) {
    console.log(dataModal);

  }

  ngOnInit(): void {
    this.getDetails(this.dataModal.artist_id);
    this.getALbums(this.dataModal.artist_id);

  }

  getDetails(id: number) {
    this.musixService.getArtistDetails(id).subscribe(res => {
    })
  }

  getALbums(id: number) {
    this.musixService.getArtistAlbums(id).subscribe(res => {
      console.log(res);
    })
  }

}
