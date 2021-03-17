import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ArtistDetailsComponent],
  exports: [ArtistDetailsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class ArtistDetailsModule { }
