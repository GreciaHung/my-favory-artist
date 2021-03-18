import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ArtistDetailsComponent],
  exports: [ArtistDetailsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ArtistDetailsModule { }
