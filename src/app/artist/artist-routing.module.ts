import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from '../shared/dialogs/artist-details/artist-details.component'

const routes: Routes = [{
  path: '',
  component: ArtistListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
