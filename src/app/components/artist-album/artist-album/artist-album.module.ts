import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { ArtistAlbumComponent } from '../artist-album.component';



@NgModule({
  declarations: [ArtistAlbumComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class ArtistAlbumModule { }
