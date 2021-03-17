import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [ArtistDetailsComponent],
  imports: [
    CommonModule, MatExpansionModule
  ]
})
export class ArtistDetailsModule {
  panelOpenState = false;
 }
