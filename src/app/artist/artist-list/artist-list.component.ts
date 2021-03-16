import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MusixService } from 'src/app/shared/services/musix.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  constructor(
    private readonly musixService: MusixService
  ) { }

  ngOnInit(): void {
    this.musixService.searchArtist('shakira')
    .subscribe(res => {
      console.log(res);
    })
  }

}
