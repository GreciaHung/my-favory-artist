import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from './artist-card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [ArtistCardComponent],
  exports: [ArtistCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ArtistCardModule { }
