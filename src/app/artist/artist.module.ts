import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SearchBarModule } from '../components/search-bar/search-bar.module';
import {ArtistCardModule} from '../components/artist-card/artist-card.module'

@NgModule({
  declarations: [ArtistListComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SearchBarModule,
    ArtistCardModule
  ]
})
export class ArtistModule { }
