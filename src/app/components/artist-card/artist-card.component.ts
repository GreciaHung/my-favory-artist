import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { ArtistData } from '../../shared/global-interfaces';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input()
  public data: ArtistData;

  constructor() { }

  ngOnInit(): void {
  }

}

