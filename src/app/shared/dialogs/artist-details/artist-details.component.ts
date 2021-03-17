import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistData } from '../../global-interfaces';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  panelOpenState = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: ArtistData
  ) {
    console.log(dataModal);

  }

  ngOnInit(): void {
  }

}
