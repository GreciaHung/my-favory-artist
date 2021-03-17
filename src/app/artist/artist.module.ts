import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SearchBarModule } from '../components/search-bar/search-bar.module';
import { ArtistCardModule } from '../components/artist-card/artist-card.module'
import { ArtistDetailsModule } from '../shared/dialogs/artist-details/artist-details.module';

@NgModule({
  declarations: [ArtistListComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SearchBarModule,
    ArtistCardModule,
    ArtistDetailsModule
  ]
})
export class ArtistModule { }
